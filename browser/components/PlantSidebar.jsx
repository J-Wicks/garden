import React from 'react';
import PlantCircle from './ImageCircle.jsx';

const plants = ['spider', 'cactus', 'succulent', 'othersucculent'];

export default function DumbComponent () {
  return (
    <div className="wrapper">
      <div id="left-bar" className="row row-offcanvas row-offcanvas-left">
        <div className="column sidebar-offcanvas" id="sidebar">
          <ul id="menu">{
            plants && plants.map((plant, idx) => <PlantCircle section={Math.floor(idx + 1)}object={plant} />)
          }
          </ul>
        </div>
      </div>
    </div>
  );
}
