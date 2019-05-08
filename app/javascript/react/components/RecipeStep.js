import React from 'react';

const RecipeStep = props => {
  return (
    <div>
      <div className="step_wrapper">
        <p className="stepName">{props.stepName}</p>
        <div className="textAreas">
          <label className="label" htmlFor={`s${props.step_num}Time`}>
            Time
          </label>
          <input
            id={`s${props.step_num}Time`}
            name={`s${props.step_num}Time`}
            className="element text time digit_box medium"
            type="text"
            value={props.time_val}
            onChange={props.recipeOnChangeHandler}
          />
          <label className="label" htmlFor={`s${props.step_num}Temp`}>
            Temp
          </label>
          <input
            id={`s${props.step_num}Temp`}
            name={`s${props.step_num}Temp`}
            className="element text temp digit_box medium"
            type="text"
            value={props.temp_val}
            onChange={props.recipeOnChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeStep;
