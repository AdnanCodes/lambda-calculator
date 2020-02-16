import React, { useState } from "react";


const Display = (props) => {
  
  console.log('this is a sample state being shown ', props.display);
  return <div className ="displayBox">{/* Display any props data here */props.display}</div>;
};

export default Display;
