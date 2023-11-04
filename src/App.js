import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import Main from "./components/MainComponent.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { ToastContainer } from 'react-toastify';

const store = configureStore; 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
        <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
      </Provider>
    );
    
  }
}

export default App;
