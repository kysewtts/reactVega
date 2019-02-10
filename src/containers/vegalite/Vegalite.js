import React, { Component } from 'react';
import VegaLite from 'react-vega-lite';
import { connect } from 'react-redux';

// const spec = {
//   "description": "A simple bar chart with embedded data.",
//   "mark": "bar",
//   "encoding": {
//     "x": {"field": "a", "type": "ordinal"},
//     "y": {"field": "b", "type": "quantitative"}
//   }
// };

// const barData = {
//   "values": [
//     {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
//     {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
//     {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
//   ]
// };

// ReactDOM.render(
//   <VegaLite spec={spec} data={barData} />,
//   document.getElementById('bar-container')
// );

class Vegalite extends Component{
  
  render(){
    let barData = {
      "values": [
        {"a" : 2}
      ]
    }
    if(this.props.data.length){
      const data = this.props.data;
      console.log(data);
      const spreadData = [
        ...data[0]
      ];
      console.log(spreadData);
      barData = {
        "values": spreadData
      }
    }
    const spec = {
      "description": "A simple bar chart with embedded data.",
      "width": 200,
      "mark": "line",
      "binSpacing": 10,
      "encoding": {
        "x": {"field": "date", "type": "ordinal"},
        "y": {"field": "day.avgtemp_c", "type": "quantitative"}
      }
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
    
    return(
      <div className = "container center" style = {style}>
        <VegaLite spec={spec} data = {barData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.data,
    showgraph: state.showgraph
  };
};

export default connect(mapStateToProps)(Vegalite)