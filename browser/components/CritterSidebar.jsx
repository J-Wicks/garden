import React from 'react';
import ImageCircle from './ImageCircle.jsx';

const animals = ['fish', 'fish', 'fish', 'fish'];

export default function DumbComponent () {
  return (
    <div className="wrapper">
      <div id="left-bar" className="row row-offcanvas row-offcanvas-left">
        <div className="column sidebar-offcanvas" id="sidebar">
          <ul id="menu">{
            animals && animals.map((animal, idx) => <ImageCircle section={Math.floor(idx + 1)}object={animal} />)
          }
          </ul>
        </div>
      </div>
    </div>
  );
}
