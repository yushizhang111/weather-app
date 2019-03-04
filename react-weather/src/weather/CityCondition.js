import React from 'react';
import icon_umberella from '../images/icon/icon-umberella.png';
import icon_wind from '../images/icon/icon-wind.png';
import icon_compass from '../images/icon/icon-compass.png';

const style ={
    textAlign: 'center',
    fontSize: 14,
}
/*
*@param {*} props
*data={
*   city:'Brisbane, Au',
*   humidity: 62,
*   windSpeed: 9,
*   windDirection: 'NS',
*   temp:{C:26, F:70}
*}
*/

export default function CityCondition(props){
    const {data, unit} = props;
    return (
        <section className="weather-condition">
            <div className="weather-condition__location">{data.city}</div>
            <div style={style}>Clear</div>
            <div className="weather-condition__temp">{data.temp[unit]}{unit}</div>
            <div className="weather-condition__desc">
                <div>
                <img src={icon_umberella} alt=""/>
                <span className="citem">{data.humidity}%</span>
                </div>
                <div>
                <img src={icon_wind} alt=""/> <span className="citem">{data.windSpeed} km/h</span>
                </div>
                <div>
                <img src={icon_compass} alt=""/> <span className="citem">{data.windDirection}</span>
                </div>
            </div>
        </section>
    )
}