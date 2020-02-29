import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem} from '@fortawesome/pro-duotone-svg-icons'

const Box = (props) => {

    const style = {
        color:  "#1cbcff"
    };

    const valueGems = [];
    for (let i = 0; i < props.val; i++) {
        valueGems.push(<FontAwesomeIcon style={style} icon={faGem}/>);
    }



    return (
        <div className='Box'>
            <h1>{props.name}</h1>
            <h2>{props.cat}</h2>
            {valueGems}
            <img src={props.image} alt={props.name}/>
        </div>
    )
};

export default Box