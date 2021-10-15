import React from 'react';
import Banner from './Banner/Banner';
import FoodItem from './FoodItem/FoodItem';
import './Home.css'
import WhyUChooseUS from './WhyUChooseUS/WhyUChooseUS';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodItem></FoodItem>
            <WhyUChooseUS></WhyUChooseUS>
        </div>
    );
};

export default Home;