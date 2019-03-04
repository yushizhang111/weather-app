import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Navbar from './Navbar';
import {fetchCurrent} from '../api/weather';

class WeatherChannel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            unit:'C',
            curCity: 'brisbane',
            condition:{
                city:'Brisbane, Au',
                humidity: 62,
                windSpeed: 9,
                windDirection: 'NS',
                temp:{C:27, F:80.6}
            },
            forecast:[
                {
                    day:'Sat',
                    time: '19:00',
                    high: {C:28,F:90},
                    low:{C:15,F:78}
                },
                {
                    day:'Sun',
                    time: '20:00',
                    high: {C:29,F:91},
                    low: {C:16,F:79}
                },
                {
                    day:'Mon',
                    time: '21:00',
                    high: {C:30,F:92},
                    low: {C:17,F:80}
                }
            ]
        
            
        };
    }

    componentDidMount(){
        fetchCurrent(this.state.curCity).then(data=>{
            console.log(data);
            this.setState({condition: data});
        })
        // fetchForecast(this.state.curCity).then(data=>{
        //     console.log(data);
        //     this.setState({forecast: data});
        // })
    }

    switchTemp(){
        console.log('switched');
        if(this.state.unit ==='C'){
            this.setState(
               {unit:'F'}
            );
        }else{
            this.setState(
                {unit:'C'}
             );
        }
    }
    changeCity(event){
        this.setState({
            curCity:event.target.value,
        })
    }

    search(){
        fetchCurrent(this.state.curCity).then(data=>{
            console.log(data);
            this.setState({condition: data});
        })
    }

    render(){
        const {condition, forecast, unit, curCity} = this.state;
        return(
            <React.Fragment>
                <Navbar unit={unit} curCity={curCity} switchTemp={() => {this.switchTemp()}} changeCity={(event)=>{this.changeCity(event)}} search={()=>{this.search()}}/>
                <main>
                    <CityCondition data={condition} unit={unit}/>
                    <Forecast forecastData={forecast} unit={unit}/>
                
                </main>
            </React.Fragment>

        )
    }
}

export default WeatherChannel;