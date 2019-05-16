import React, { Component } from 'react';
import * as d3 from "d3";

class NowBrewing extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      session: [],
      nowBrewingSesId: this.props.nowBrewingSesId,
      wortTemp: 0,
      themTemp: 0,
      percentComplete: 0,
      timeRemaining: 0,
      boilerScale: 0
    }
    this.chartWrapper = this.chartWrapper.bind(this);
    this.drawChart = this.drawChart.bind(this);
    let gauge1,
    gauge2,
    gauge3,
    gauge4,
    gauge5
  }

  componentDidMount() {
      this.props.fetchNewestSession()
      this.getData()
      this.timer = setInterval(()=> this.refreshDataViz(), 5000);
      this.d3LiquidGauge()
      this.refreshDataViz()
    }

  refreshDataViz(){
    this.getData()
    this.setState({percentComplete: this.getPercentComplete()})
    this.updateD3LiquidGauge()
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
        let data = google.visualization.arrayToDataTable(graphReadyData);
        let options = {
          curveType: 'function',
          chartArea:{width:'90%',height:'80%'},
          legend: { position: 'in' },
        };
        let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
      }
    }
  }

  getSessionValues(key){
      if (this.state.session && this.state.session.length > 0){
        return this.state.session[this.state.session.length-1][key]
      } else {
        return 0
      }
  }

  getPercentComplete(){
    if (this.state.session && this.state.session.length > 0){
      let percent = this.state.session[0]['timeLeft']/(this.state.session[0]['timeLeft']-this.state.session[this.state.session.length-1]['timeLeft'])
      return percent.toFixed(0)
    }
  }

  drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Wort', this.getSessionValues('wort')],
      ['Steam', this.getSessionValues('therm')],
    ]);

    let options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5,
    };

    let chart = new google.visualization.Gauge(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  d3LiquidGauge(){
    let config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#0000ff";
    config1.textColor = "#4444ff";
    config1.waveTextColor = "#0000cc";
    config1.waveColor = "#1155ff";
    config1.circleThickness = 0.1;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    gauge1 = loadLiquidFillGauge("fillgauge1", this.state.percentComplete, config1);
    let config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FF7777";
    config2.textColor = "#FF4444";
    config2.waveTextColor = "#FFAAAA";
    config2.waveColor = "#FFDDDD";
    config2.circleThickness = 0.2;
    config2.textVertPosition = 0.2;
    config2.waveAnimateTime = 1000;
    config2.displayDegree = false;
    config2.displayPercent = false;
    gauge2 = loadLiquidFillGauge("fillgauge2", 28, config2);
    let config3 = liquidFillGaugeDefaultSettings();
    config3.circleColor = "#D4AB6A";
    config3.textColor = "#553300";
    config3.waveTextColor = "#805615";
    config3.waveColor = "#AA7D39";
    config3.circleThickness = 0.1;
    config3.circleFillGap = 0.2;
    config3.textVertPosition = 0.8;
    config3.waveAnimateTime = 2000;
    config3.waveHeight = 0.3;
    config3.waveCount = 1;
    config3.displayPercent = false;
    config3.displayDegree = true;
    config3.minValue = 70;
    config3.maxValue = 220;
    gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config3);
    let config5 = liquidFillGaugeDefaultSettings();
    config5.circleThickness = 0.15;
    config5.circleColor = "#808015";
    config5.textColor = "#555500";
    config5.waveTextColor = "#FFFFAA";
    config5.waveColor = "#AAAA39";
    config5.textVertPosition = 0.8;
    config5.waveAnimateTime = 1000;
    config5.waveHeight = 0.05;
    config5.waveAnimate = true;
    config5.waveRise = false;
    config5.waveHeightScaling = false;
    config5.waveOffset = 0.25;
    config5.textSize = 0.75;
    config5.waveCount = 3;
    config5.displayPercent = false;
    config5.displayDegree = true;
    config5.minValue = 70;
    config5.maxValue = 350;
    gauge5 = loadLiquidFillGauge("fillgauge5", 60.44, config5);
    let config6 = liquidFillGaugeDefaultSettings();
    config6.circleThickness = 0.4;
    config6.circleColor = "#6DA398";
    config6.textColor = "#0E5144";
    config6.waveTextColor = "#6DA398";
    config6.waveColor = "#246D5F";
    config6.textVertPosition = 0.52;
    config6.waveAnimateTime = 10000;
    config6.waveHeight = 0;
    config6.waveAnimate = true;
    config6.waveCount = 2;
    config6.waveOffset = 0.25;
    config6.textSize = 1.2;
    config6.minValue = 0;
    config6.maxValue = 1;
    config6.displayPercent = false;
    config6.displayDegree = false;
    gauge6 = loadLiquidFillGauge("fillgauge6", 120, config6);
  }

  updateD3LiquidGauge(){
    gauge1.update(this.state.percentComplete)
    gauge2.update((this.getSessionValues('timeLeft')/60))
    gauge3.update(this.getSessionValues('wort'))
    gauge5.update(this.getSessionValues('therm'))
    gauge6.update(this.getSessionValues('shutScale'))
  }

  render () {
    this.chartWrapper()
    return(
      <div className="nowBrewingBody">
        <div className="nowBrewingWrapper">
        <div className="scriptHeader">
          Now Brewing
        </div>
          <div className="gaugesWrapper">
              <div className = "brewNextName">
                {this.props.brewNextName}
              </div>
              <div className="gaugeLabels">
                <div className="gaugeLabel">
                  Percent Complete
                  <svg id="fillgauge1" width="100%"></svg>
                </div>
                <div className="gaugeLabel">
                  Time Remaining
                  <svg id="fillgauge2" width="100%"></svg>
                </div>
              </div>
              <div className="gaugeLabels">
                <div className="gaugeLabel">
                  Wort Temp
                  <svg id="fillgauge3" width="100%"></svg>
                </div>
                <div className="gaugeLabel">
                  Steam Temp

                  <svg id="fillgauge5" width="100%"></svg>
                </div>
              </div>
              <div className="gaugeLabels">
                <div className="gaugeLabel">
                  Boiler Scale:
                  <svg id="fillgauge6" width="100%"></svg>
                </div>
              </div>
            <div className="gaugeLabels">
              Current Step: {this.getSessionValues('step')}
            </div>
          </div>
          <div id="curve_chart">
          </div>
        </div>
      </div>



    )
  }
}
export default NowBrewing;
