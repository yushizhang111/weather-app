## Install node, npm

Download NodeJS https://nodejs.org/en/, need LTS version (long term support, recommended for most users ), npm comes with node installation
```sh
$ node -v  # check installed node version
$ npm  -v  # check installed npm version
```
---
## Use `create-react-app` starter 
Set up local env for React development can be painful, we want to get started quickly and easily, focus on building app first, and get into tooling details later.
Check out the doc
```sh
# with npm
$ npx create-react-app react-weather # react-weather is the project name you give
$ cd react-weather
$ npm start

# with yarn
$ yarn create react-app react-weather
$ yarn start
```

## Weather app powered by React - Part 1

‣ Break down App to components in different files:

**Header.js**
```js
import React from 'react';

export default function Header(props) {

}
```

**Footer.js**
```js
import React from 'react';

export default function Footer(props) {

}
```

**CityCondition.js**   
The left part of weather channel, think about what kind of props we pass in
```js
import React from 'react';

export default function CityCondition(props) {
  const {city, weather, temp, humidity} = props.data;
  return (
    ...
  )
}
```

**Forecaster.js**    
The right part of weather channel, a list of daily data
```js
import React from 'react';

export default function Forecaster(props) {
  
}
```

**App.js**: Compose different pieces together
```js
// import app css, more detail about how it works in next session
import './styles/main.css';

import Header  from './Header';
import Footer  from './Footer';
import CityCondition from './CityCondition';
import Forecaster from './Forecaster';

class App extends React.Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <section className='weather-condition'>
          <CityCondition data={} />
        </section>
        <section className='weather-forecast'>
          <Forecaster days={} />
        </section>        
        
        <Footer />
      </div>
    );
  }
}
```

‣ Render the whole App
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```