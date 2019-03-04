import React from 'react';

const style ={
    flex: 1,
}
const button_style ={
    paddingRight:5,
}

export default function Navbar(props){
    const {unit,switchTemp,changeCity,curCity,search} =props;
    return (
        <nav>
            <div style={style}>
            <input className="search-input" value={curCity} onChange={changeCity} search={search}/>
            <button className="search-btn" onClick={search}><i className="fa fa-search"></i></button>

            <button className="temp-switch" onClick={switchTemp}>
                <i
                className="fa fa-thermometer-empty"
                aria-hidden="true"
                style={button_style}
                ></i>
                <sup>&deg;</sup>{unit}
            </button>
            </div>
        </nav>
    )
}