import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Route, Router, Routes,Outlet } from "react-router-dom";
import { connect } from "react-redux";



import { NEWS } from '../shared/news';
import Userlisting from "./Userlisting.js";
import Adduser from "./Adduser.js";
import Updateuser from "./Updateuser.js";
// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

      news: NEWS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          news={this.state.news.filter((news) => news.id)[0]}
          news1={this.state.news.filter((news) => news.id)[1]}
          news2={this.state.news.filter((news) => news.id)[2]}
        />
      );
    };

   

    return (
      <div>
        <Header />
        
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={HomePage} />
          <Route exact path='/contactus' Component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route path='/user' element={<Userlisting></Userlisting>}></Route>
          <Route path='/user/add' element={<Adduser></Adduser>}></Route>
          <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
          <Route exact path="/contactus" Component={Contact} />
        </Routes>

        <Footer />
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
