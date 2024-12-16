import React, { isValidElement } from 'react';
import Button from './components/Button';
import Keys from './components/Keys';
import Post from './components/Post';
import MyComponent from './components/Lifecycle/MyComponent';
import NavBar from './components/Assignment/NavBar/NavBar';
import Sidebar from './components/Assignment/Sidebar/Sidebar';
import Newsfeed from './components/Assignment/Newsfeed/Newsfeed';
import HomePage from './components/Assignment/Homepage/HomePage';

function App() {

  //console.log('isValidElement',isValidElement(<p/>));
  /*
  return (
    <div>
      <h1>Hello World</h1>
      <Button type='primary' onClick={() => console.log('Reusable handleClick')}>Click Me!</Button>
      <Button type='default' onClick={() => console.log('Reusable handleClick')}>Click Me!</Button>  
      <Keys />  
    </div>
  );
  */
  /*
  return (
    <div>
      <h1>False Book</h1>
      <Post showDate={false}></Post>
    </div>
  );
  */

  /*
  return (
    <div>
      <MyComponent counter={1}></MyComponent>
    </div>
  )
  */

  return (
    <>
    <div>
      <NavBar buttons={["Home", "About Us", "Help"]}
      selected='Home'>
      </NavBar>
    </div>
    <HomePage />
    </>
  )
}

export default App;