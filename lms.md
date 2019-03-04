`open -n -a "Google Chrome" --args --user-data-dir=/tmp/temp_chrome_user_data_dir http://localhost:3001 --disable-web-security`

```sh
create-react-app lms-react-a # based on which team you are in

# create folders under /src
App, Courses, Students, Lectures, UI, styles, 

# install required dependencies
npm install axios --save  # save is for update package.json
npm install react-router-dom --save  

.gitignore to exclude node_modules
```
Create Navbar.js under `App` folder
**Navbar.js**
```js
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top ">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">
            <img src={logo} style={{height:40}} alt="logo"/>
          </Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/lecturers">Lecturers</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

```

Create Routes.js under `App` folder to map path with component 
```js
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes(props) {
  return (
   <Switch>
    <Route exact path="/" render={() => <h1>Courses</h1>} />
    <Route exact path="/courses" render={() => <h1>Courses</h1>} />
    <Route exact path="/students" render={() => <h1>Students</h1>} />
    <Route exact path="/lectures" render={() => <h1>Lectures</h1>} />    
   </Switch>
  )
}
```

Go to `src/App.js`:
```js
import React, { Component } from 'react';

import Routes from './App/Routes';
import Navbar from './App/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Routes />
        </main>
      </div>
    )
  }
}
```

Go to `index.js`:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```