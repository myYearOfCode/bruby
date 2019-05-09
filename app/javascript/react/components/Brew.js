import React, { Component } from 'react';

class Brew extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: {},
      graphTarget: "0454356aec4a80"
    }
    this.changeGraphTarget = this.changeGraphTarget.bind(this);
  }
  // http://localhost:3000/api/v1/sessions

  makeList() {
    if (this.props.sessions ){
      return Object.keys(this.props.sessions).map(session => {
        return <div
          onClick={this.changeGraphTarget}
          value={session}
          key={session}
          id={session}
        >
          {session}
        </div>
      })
    }
  }
  componentDidMount(){
    fetch('api/v1/sessions')
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

    if (Object.keys(this.state.session).length > 0){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      let sesId = Object.keys(this.state.session)[0]
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
          title: `${sesId} - brewed on ${date} at ${time.split('.')[0]}`,
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
      <div>
      {this.makeList()}
      <div id="curve_chart"></div>
        Brew log
      </div>
    )
  }
}

export default Brew;
