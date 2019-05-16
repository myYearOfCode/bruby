import React, { Component } from 'react';
import * as d3 from "d3";
import BarChart from './BarChart';

class NowBrewing extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      session: [],
      nowBrewingSesId: this.props.nowBrewingSesId,
    }
    this.chartWrapper = this.chartWrapper.bind(this);
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(()=> this.getData(), 20000);
    this.props.fetchNewestSession()
    this.getData()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null;
  }


  getRecipeFromBrew(nowBrewingSesId){
      fetch(`/api/v1/brews/${nowBrewingSesId}`)
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
        console.log(body.recipe)
        return ({recipe: body.recipe})
      })
      .catch(error => console.error( `Error in fetch: ${error.message}` ));
  }

  getData() {
    console.log(`/api/v1/sessions/${this.props.nowBrewingSesId}`)
    if (this.state.recipe){
      this.getRecipeFromBrew(this.props.nowBrewingSesId)
    }
    fetch(`/api/v1/sessions/${this.props.nowBrewingSesId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText}) ,`
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()
    })
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

  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Wort', this.getSessionValues('wort')],
      ['Steam', this.getSessionValues('therm')],
    ]);

    var options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5,
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  drawPie() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Finished',     90],
      ['Unfinished',      10],

    ]);

    var options = {
      legend: '% completed',
      pieSliceText: 'none',
      pieStartAngle: 0,
      slices: {
        0: { color: 'blue' },
        1: { color: 'transparent' }
      },
      pieHole: 0.6,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }

  render () {
    this.chartWrapper()
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawPie);
    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(this.drawChart);
    return(
      <div className="nowBrewingBody">
        <div className="nowBrewingWrapper">
        <div className="scriptHeader">
          Now Brewing
        </div>
          <div className = "brewStatWrapper">
            <BarChart />
            <div className = "brewNextName">
              Brewing: {this.props.brewNextName}
            </div>
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
          </div>
          <div className="gaugesWrapper">
            <div id="donutchart"></div>
            <div id="chart_div" className="wortGauge"></div>
          </div>
          <div id="curve_chart">
          </div>
        </div>
      </div>



    )
  }
}
export default NowBrewing;
