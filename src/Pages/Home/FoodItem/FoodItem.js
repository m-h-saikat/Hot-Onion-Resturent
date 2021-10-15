import React from 'react';
import { NavLink } from 'react-router-dom';
import Breakfast from './BreakFast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';
import { NavHashLink } from 'react-router-hash-link';

const FoodItem = () => {
    return (
        <div>

<NavLink to="#Breakfast"className="NavLink">Breakfast</NavLink>
<NavLink to="#Lunch"className="NavLink">Lunch</NavLink>
<NavLink to="#Dinner"className="NavLink">Dinner</NavLink>


<NavHashLink to="/Home#Breakfast">Link to Hash Fragment</NavHashLink>
<NavHashLink to="/Home#Lunch">Link to Hash Fragment</NavHashLink>
<NavHashLink to="/Home#Dinner">Link to Hash Fragment</NavHashLink>

           
        </div>
    );
};

export default FoodItem;