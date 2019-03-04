import React, { Component } from 'react';
import './style/main.css';
import Header from './weather/Header';
import Footer from './weather/Footer';

import WeatherChannel from './weather/WeatherChannel';
import WeatherChannelRedux from './weather/WeatherChannelRedux';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

    render() {
        return (
            <Provider store = {store}>
                <div className="weather-channel__container">
                    <Header />
                    
                    <WeatherChannel />
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default App;
