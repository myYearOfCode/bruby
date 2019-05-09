import React, { Component } from 'react';

class NowBrewing extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      session: [],
      nowBrewingSesId: this.props.nowBrewingSesId,
    }
    this.chartWrapper = this.chartWrapper.bind(this);
  }
  // when mounted this component starts grabbing data
  // build the api
  // graph and show data nicely
  // fetch call in front end somehow refreshes api call every 25 sec
  // web sockets seems like the right way to do this.
  componentDidMount() {
    this.timer = setInterval(()=> this.getData(), 20000);
    this.getData()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null;
  }

  getData() {
    console.log(`api/v1/sessions/${this.props.nowBrewingSesId}`)
    fetch(`api/v1/sessions/${this.props.nowBrewingSesId}`)
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
      this.setState({session: body[this.props.nowBrewingSesId]})
    })
    .catch(error => console.error( `Error in fetch: ${error.message}` ));
    let newCounter = (this.state.counter+1)
    this.setState({counter: newCounter})
  }

  chartWrapper() {
    if (this.state.session && (this.state.session.length > 0)) {
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      let currentSession = this.state.session
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

      function drawChart(date,time) {
        var data = google.visualization.arrayToDataTable(graphReadyData);
        var options = {
          curveType: 'function',
          chartArea:{width:'90%',height:'80%'},
          legend: { position: 'in' },
        };
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
      }
    }
  }

  getSessionValues(key){
      if (this.state.session && this.state.session.length > 0){
        return this.state.session[this.state.session.length-1][key]
      }
  }

  getPercentComplete(){
    if (this.state.session && this.state.session.length > 0){
      let percent = this.state.session[0]['timeLeft']/(this.state.session[0]['timeLeft']-this.state.session[this.state.session.length-1]['timeLeft'])
      return percent.toFixed(2)
    }
  }

  render () {
    this.chartWrapper()
    return(
      <div>
      <div className = "brewStatHeader">
        Current Wort Temp: {this.getSessionValues('wort')}°F
      </div>
      <div className = "brewStatHeader">
        Current Steam Temp: {this.getSessionValues('therm')}°F
      </div>
      <div className = "brewStatHeader">
        Time Remaining: {(this.getSessionValues('timeLeft')/60).toFixed()} minutes
      </div>
      <div className = "brewStatHeader">
        Percent Complete: {this.getPercentComplete()}%
      </div>
      <div className = "brewStatHeader">
        Current Step: {this.getSessionValues('step')}
      </div>
      <div className = "brewStatHeader">
        Boiler Scale: {this.getSessionValues('shutScale')}
      </div>
        <div id="curve_chart"></div>
      </div>
    )
  }
}
export default NowBrewing;
