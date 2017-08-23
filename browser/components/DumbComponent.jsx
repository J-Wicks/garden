import React from 'react';
import ImageCircle from './ImageCircle.jsx';
// import { Link } from 'react-router';
const plant = {pictureURL: '/images/cactus.jpg', name: 'cactus', fightingStyle: 'needle attack' };
const blogposts = ['I am stupid', 'I am ugly', 'I won a boat in an internet contest'];

const DumbComponent = () => (
  <div className="container-fluid bar">
    <div className="row">
      <div className="plantstats col-sm-6">
        <ImageCircle object={plant.name} />

      </div>
      {
        blogposts &&
        blogposts.map((blogpost) => {
          return (
            <div className="col-sm-10">
              <span className="blogpost"> {blogpost} </span>
            </div>
          );
        })
      }
    </div>
  </div>
);

export default DumbComponent;
