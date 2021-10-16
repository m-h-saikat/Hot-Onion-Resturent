import React from 'react';
import { Link } from 'react-router-dom';
import useFood from '../../../Hooks/useFood';
import './WhyUChooseUS.css'
const WhyUChooseUS = () => {
  const {foods}=useFood();
  const aboutUS=foods?.filter(p=>p.type==='about-us');
    return (
      <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
{aboutUS.map((AboutUS) => (
<div className="col" key={AboutUS.key}>
<div className="card h-60 shadow p-3 mb-5 mt-5 bg-white rounded">
 <img
   src={AboutUS.image}
   className="img-fluid rounded"
   alt="..."
 />
 <div className="card-body">
   <h5 className="card-title text-danger">
     <b>{AboutUS.title}</b>
   </h5>
   <p className="card-text mt-3">{AboutUS.description}</p>
 </div>
 <div className="card-footer">
 <Link to="#" style={{paddingLeft: 13, textDecoration: 'none'}}>See More </Link>
 </div>
</div>
</div>
))}
</div> 
   </div>
    );
};

export default WhyUChooseUS;