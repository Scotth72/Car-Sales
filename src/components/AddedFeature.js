import React from 'react';

import { connect } from 'react-redux';
import { removeFeature } from '../store/actions';



const AddedFeature = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  return (
    <li>
      {}
      <button
        className="button" onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);

/* Add an onClick to run a function to remove a feature */