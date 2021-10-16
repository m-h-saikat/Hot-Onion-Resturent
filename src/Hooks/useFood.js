import React, { useEffect, useState } from 'react';

const useFood = () => {
const [foods,setFoods]=useState([]);


useEffect(() => {
    fetch("./Database.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
    return (
    {   foods}
    );
};

export default useFood;