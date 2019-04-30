import React from 'react';

// <label>{props.label}
// <input
// name={props.name}
// type='text'
// value={props.content}
// onChange={props.handlerFunction}
// />
// </label>



const RecipeStep = props => {
  return (
    <div>
      <p className="stepName step_wrapper">{props.stepName}</p>
      <div className="step_wrapper">
        <label className="label" htmlFor={`s${props.step_num}time`}>Time</label>
        <input
          id={`s${props.step_num}time`}
          name={`s${props.step_num}time`}
          className="element text time medium"
          type="text"
          defaultValue={props.time_val}
          onChange={props.handlerFunction}
        />
        <label className="label" htmlFor={`s${props.step_num}temp`}>Temp</label>
        <input
          id={`s${props.step_num}temp`}
          name={`s${props.step_num}temp`}
          className="element text time medium"
          type="text"
          defaultValue={props.temp_val}
          onChange={props.handlerFunction}
        />
      </div>
    </div>
  );
}

export default RecipeStep;
