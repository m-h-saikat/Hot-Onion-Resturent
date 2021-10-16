import React from 'react';
import useFood from '../../../../Hooks/useFood';

const Breakfast = () => {
  const {foods}=useFood();
 const Breakfast=foods?.filter(p=>p.type==='Food-Breakfast');
  
    return (
        <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
{Breakfast.map((food) => (
  <div className="col" key={food.key}>
    <div className="card h-60 shadow p-3 mb-5 mt-5 bg-white rounded">
      <img
        src={food.image}
        className="img-fluid rounded"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-danger">
          <b>{food.title}</b>
        </h5>
        <p className="card-text mt-3">{food.description}</p>
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
        </div>
    );
};

export default Breakfast;