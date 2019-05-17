import React, { Component } from 'react';
import Brew from '../components/Brew'

class BrewContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: {},
      graphTarget: ""
    }
    this.changeGraphTarget = this.changeGraphTarget.bind(this);
  }

  makeList() {
    if (this.props.sessions ){
      return Object.keys(this.props.sessions).reverse().map(session => {
        return <Brew
          sessions={this.props.sessions}
          key={session}
          sessionId={session}
          you={this.props.sessions[session]}
          />
      })
    }
  }

  componentDidMount(){
    fetch('/api/v1/sessions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText}) ,`
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({session: body})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  changeGraphTarget(event){
    this.setState({graphTarget: event.target.id})
  }

  render () {

    if ((Object.keys(this.state.session).length > 0)&&(this.state.graphTarget !== "")){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      let graphTarget = this.state.graphTarget
      let currentSession = this.state.session[graphTarget]
      let header = [["time", "wort temp", "steam temp"]]
      let body = currentSession.map(point => {
        return  [
          point["created_at"].split('T')[1].split('.')[0],
          point["wort"],
          point["therm"]
        ]
      })
      let [date, time] = currentSession[0]["created_at"].split('T')
      let graphReadyData = header.concat(body)

      function drawChart() {
        var data = google.visualization.arrayToDataTable(graphReadyData);
        var options = {
          title: `${graphTarget} - brewed on ${date} at ${time.split('.')[0]}`,
          curveType: 'function',
          chartArea:{width:'90%',height:'80%'},
          legend: { position: 'in' },
          animation: {
            startup: 'true',
            duration: 2000,
            easing: 'inAndOut'}
        };
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
      }
    }

    return(
      <div className="brewsBody">
        <div className="brewsWrapper">
        <div className="scriptHeader">
          Brew Logs
        </div>
          {this.makeList()}
          <div id="curve_chart"></div>
        </div>
      </div>
    )
  }
}

export default BrewContainer;
