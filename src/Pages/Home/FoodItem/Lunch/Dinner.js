import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFood from '../../../../Hooks/useFood';

const Dinner = () => {
 const{foods}=useFood();
    
    return (
        <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
        {foods.map((food) => (
          <div className="col" key={food.key}>
            <div className="card h-60 shadow p-3 mb-5 mt-5 bg-white rounded">
              <img
                src={food.img}
                className="img-fluid rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-danger">
                  <b>{food.Name}</b>
                </h5>
                <p className="card-text mt-3">{food.shortdetails}</p>
              </div>
              <div className="card-footer">
                <p className="card-text  ">
                  <strong>${food.price}</strong>
                </p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

<button className="btn btn-primary p-2" onClick="saikat">Checkout Your Food</button>
     
      </div>
   
    );
};

export default Dinner;

