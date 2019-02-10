import React, { Component } from 'react';
import VegaLite from 'react-vega-lite';
import { connect } from 'react-redux';


import Spinner from '../../components/Spinner/spinner';

class Vegalite extends Component{
  
  render(){
    let barData = {
      "values": [
        {"a" : 2}
      ]
    }
    if(this.props.data.length){
      const data = this.props.data;
      const spreadData = [
        ...data[0]
      ];
      barData = {
        "values": spreadData
      }
    }
    const spec = {
      "description": "A simple bar chart with embedded data.",
      "width": 300,
      "height": 300,
      "padding": {
        "left": 5,
        "right": 5,
        "top": 5,
        "bottom": 5
      },
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "type": "ordinal", "title": "Date"},
        "y": {"field": "day.avgtemp_c", "type": "quantitative", "title": "Average temperature in Celsius"}
      },
    };

    let style = {
      "display": "none"
    };

    if(this.props.showgraph){
      style = {
        ...style,
        display: "block",
        "marginTop": "50px"
      };
    }
    let vegalite = (
      <div className = "container center" style = {style}>
        <VegaLite spec = {spec} data = {barData} />
        <p className="center"><b>Weather forecast for {this.props.location}</b></p>
      </div>
    );
    if(this.props.loading){
      vegalite = <Spinner />
    }
    if(this.props.error){
      vegalite = <p className = "center"><strong>{this.props.error}</strong></p>
    }
    
    return(
      <div>
        {vegalite}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.data,
    showgraph: state.showgraph,
    location: state.location,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps)(Vegalite)