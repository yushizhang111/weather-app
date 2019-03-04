1- Create a new module that's responsible for authentication 
```js
// api/auth.js
export function logIn(email, password) {
  // we simulate the async request to login api here
  // replace it with real api call axios.post('api/login', {email, password})
  // when backend is implemented
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // use browser localStorage to store current user info
      // so when we come back after closing the browser, we still know if user logged in before
      const curUser = {email, };
      localStorage.setItem('sessionToken', 'token from server');
      localStorage.setItem('curUser', JSON.stringify(curUser))
      resolve(curUser);
    }, 2000)
  })
}

export function logOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('curUser');
      resolve(null); // null means no user in local storage after log out
    }, 1000)
  })
}

export function isLoggedIn() {
  return localStorage.getItem('sessionToken');
}
```

2- We probably have a route mapped to SignInView.js
```js
// Routes.js
<Route exact path='signin' component={SignInView} />
```

3- Create SignInView component
```js
import {logIn} from './api/auth';

...
handleLogin() {
  const {email, password} = this.state;
  logIn(email, password)
    .then(curUser => {
      // remember component mapped in each Route will be passed with
      // history, match object, we can use history to redirect to a 
      // new path, rendering the component accordingly
      this.props.history.replace('/')
    })
}
...
```

4- We can use auth.isLoggedIn method to check and do conditional rendering
```js
// for example, in <Navbar /> component
import {isLoggedIn} from './api/auth';

...
render() {
  if (isLoggedIn()) {
    return <button>Log out</button>
  } else {
    return 'something other elements'
  }
}
...
```
