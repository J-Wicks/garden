import React from 'react';
// import { Link } from 'react-router';

export default function PlantCircle (props) {
  const plant = props.object;
  const section = props.section;
  return (
    <li>
      <section id={section}>
        <img className="plantlink" alt={plant} src={`/images/${plant}.jpg`} />
      </section>
    </li>
  );
}
