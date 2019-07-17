import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from './NumberButton';
import Display from '../../DisplayComponents/Display'

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setnumbersState] = useState(numbers)

  return (
    <div className="allNumbers">
      {
        /* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
        numbersState.map(number => <NumberButton number={number} display={props.display} setDisplay ={props.setDisplay}/>)
      }

    </div>
  );
};

export default Numbers;