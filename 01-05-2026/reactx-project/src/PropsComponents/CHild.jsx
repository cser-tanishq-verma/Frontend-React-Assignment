import React from 'react'

const CHild = (childProps) => {
    console.log(childProps);
    
  return (
    <div>
        <h3>THis is the Surname in the CHild Component</h3>
        <hr />
        {childProps.value.value.surname}
    </div>
  )
}

export default CHild