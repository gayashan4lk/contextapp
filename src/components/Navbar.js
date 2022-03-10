import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() { 
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          const { isAuthenticated, toggleAuth } = authContext;
          console.log(isAuthenticated);
          console.log(toggleAuth);
          console.log(authContext);
            return(
              <nav style={{background: theme.ui, color: theme.text}}>
                  <h1>Context App</h1>
                  <div>
                    <h4>{ isAuthenticated ? 'Logged in' : 'Logged Out' }</h4><button onClick={toggleAuth}>Sign In</button>
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
            )
        }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer>
    );
  }
}
 
export default Navbar;