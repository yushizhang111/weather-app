## Weather app powered by React - Part 2

Now we have static data in `App.js`, pass them to `<CityCondition />` and `<Forecaster />` respectively. Need to figure out how to update the data and re-pass to underlying components to display

In React, it is common to have a container (stateful) component holding data in the state, pass them to respective presentational components underneath. When we `setState` in container component, the new data will be passed again, **re-render** the children to reflect the change. This is often called **Lift state up**.

So let's create this container component, call it `WeatherChannel`
```js
// A new module WeatherChannel.js
import React, {Component} from 'react';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';

export default class WeatherChannel extends Component {
	constructor(props) {
		super(props);
		// use static data to fill initial state first
		this.state = {
			condition: {
				city:  'Brisbane, Au',
				temp: '12c',
				weather: 'Clear'
			},
			days:  [
				{weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
				{weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
				{weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
			]
		}
	}
	
	render() {
	  return (
	    <main>
		  <section className='weather-condition'>
		    <CityCondition data={this.state.condition} />
		  </section>
          <section className='weather-forecast'>
		    <Forecaster days={this.state.days} />
		  </section>
		</main>
	  )
	}
}
```
