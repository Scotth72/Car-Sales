import React from 'react';

import { connect } from 'react-redux';
import { addFeature } from '../store/actions'

const AdditionalFeature = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, { addFeature })(AdditionalFeature);
