import React, { useEffect, useState } from "react";
import { Nav, Navbar, Tab, Tabs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Breakfast from "./BreakFast/Breakfast";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";

const FoodItem = () => {
  return (
    <div>
      <Tabs defaultActiveKey="Breakfast" className="mb-3 mx-auto">
        <Tab eventKey="Breakfast" title="Breakfast">
          <Breakfast></Breakfast>
        </Tab>

        <Tab eventKey="Lunch" title="Lunch">
          <Lunch></Lunch>
        </Tab>

        <Tab eventKey="Dinner" title="Dinner">
          <Dinner></Dinner>
        </Tab>
      </Tabs>

      <NavLink to="/Cart" className="NavLink">
        <button className="btn btn-danger">Checkout Your Food</button>
      </NavLink>
    </div>
  );
};

export default FoodItem;
