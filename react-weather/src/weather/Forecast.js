import React from 'react';

export default function Forecast (props){
    const {forecastData,unit} = props;
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className="forecast__switch_0 switch-active">5 items</button>
                    <button className="forecast__switch_1">10 items</button>
                </div>
                

                <div className="weather-forecast__row">
                    <span className="weather-forecast__day">{forecastData[0].day}</span>
                    <span className="weather-forecast__icon">
                    <i className="fa fa-clock-o"></i> {forecastData[0].time}
                    </span>
                    <span className="weather-forecast__high">{forecastData[0].high[unit]}{unit}</span>
                    <span className="weather-forecast__low">{forecastData[0].low[unit]}{unit}</span>
                </div>
                <div className="weather-forecast__row">
                    <span className="weather-forecast__day">{forecastData[1].day}</span>
                    <span className="weather-forecast__icon">
                    <i className="fa fa-clock-o"></i> {forecastData[1].time}
                    </span>
                    <span className="weather-forecast__high">{forecastData[1].high[unit]}{unit}</span>
                    <span className="weather-forecast__low">{forecastData[1].low[unit]}{unit}</span>
                </div>
                <div className="weather-forecast__row">
                    <span className="weather-forecast__day">{forecastData[2].day}</span>
                    <span className="weather-forecast__icon">
                    <i className="fa fa-clock-o"></i> {forecastData[2].time}
                    </span>
                    <span className="weather-forecast__high">{forecastData[2].high[unit]}{unit}</span>
                    <span className="weather-forecast__low">{forecastData[2].low[unit]}{unit}</span>
                </div>
                
            </section>
        )
    
}