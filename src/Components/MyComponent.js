import React from 'react'

const MyComponent = (props) => {
    const styles={
        Color:props.color1,
        background:props.color2
    }
    return (
        <div>
           <p style={styles} >The Word is:{props.var}</p> 
        </div>
    )
}
export default MyComponent;

