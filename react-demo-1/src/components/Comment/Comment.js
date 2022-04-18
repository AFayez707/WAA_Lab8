import React from 'react';
import {useContext} from "react";
import {ThemeColorContext} from "../../store/ThemeColor";
const Comment = (props) => {
    const colorContext = useContext(ThemeColorContext);
    return (

<<<<<<< Updated upstream
        <div style={{color:colorContext.color}} className='Comment'>
            {props.name}
=======
        <div  className='Comment'>
            {props}
>>>>>>> Stashed changes
        </div>

    );
};

export default Comment;