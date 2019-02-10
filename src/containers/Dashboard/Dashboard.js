import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

class Dashboard extends Component{
    state = {
        countries: [],
        city: '',
        days: '1'
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.city, this.state.days);
    }

    render(){
        if(this.props.error){
            console.log(this.props.error);
        }
        return(
            <div className="container">
                <h3 className="center">Enter data to get weather forecast statistics.</h3>
                <form onSubmit = {this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="city">Enter City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            placeholder="Enter any city" 
                            onChange = {this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="days">Select number of days</label>
                        <select className="form-control" id="days" onChange = {this.handleChange} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (city, days) => dispatch(actions.fetch(city, days))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);