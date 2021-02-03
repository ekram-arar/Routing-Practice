import React from 'react'

 const Hello = (props) => {
    if (isNaN (props.id)){
        return <p>The Word is: {props.id}</p>
    }
       return(
           <p>The Number is: {props.id}</p>
       )
}
export default Hello;
