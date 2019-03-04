import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Navbar from './Navbar';
import {connect} from "react-redux";

class WeatherChannelRedux extends React.Component{
    componentDidMount(){

    }
    switchTemp(){
        console.log('switched');
        if(this.props.unit ==='C'){
            this.setState(
                {unit:'F'}
            );
        }else{
            this.setState(
                {unit:'C'}
            );
        }
    }

    render(){
        const {condition, forecast, unit} = this.props;
        return(
            <React.Fragment>
                <Navbar unit={unit} switchTemp={() => {this.switchTemp()}} />
                <main>
                    <CityCondition data={condition} unit={unit}/>
                    <Forecast forecastData={forecast} unit={unit}/>
                
                </main>
            </React.Fragment>

        )
    }
}

const mapStateToProps =(state)=>{
    return {
        condition: state.weatherData.condition,
        forecast: state.weatherData.forecast,
        unit: state.options.tempUnit

    }
}
export default connect(mapStateToProps)(WeatherChannelRedux);

