import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Cart from "./Pages/Cart/Cart";
import Breakfast from "./Pages/Home/FoodItem/BreakFast/Breakfast";
import Dinner from "./Pages/Home/FoodItem/Dinner/Dinner";
import Lunch from "./Pages/Home/FoodItem/Lunch/Lunch";
import Home from "./Pages/Home/Home";
import WhyUChooseUS from "./Pages/Home/WhyUChooseUS/WhyUChooseUS";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Not Found/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
    <AuthProvider> 
    <Router>
       <Header> </Header>
       <Switch> 
       <Route exact path ="/"> 
         <Home></Home>
         </Route>
         <Route path ="/Home"> 
         <Home></Home>
         </Route>
         <Route path ="/Cart"> 
       <Cart></Cart>
         </Route>
         <Route path ="/Breakfast"> 
         <Breakfast></Breakfast>
         </Route>
         <Route path="/Lunch"> 
         <Lunch></Lunch>
         </Route>
         <Route path ="/Dinner"> 
         <Dinner></Dinner>
         </Route>
        
         <Route path ="/Login"> 
         <Login></Login>
         </Route>
         <Route path ="/Register"> 
         <Register></Register>
         </Route>
         <Route path ="*"> 
         <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
