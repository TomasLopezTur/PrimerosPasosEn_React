import "./Button.css"
import React from 'react'
import  PropTypes  from "prop-types";

export const Button = (props) => {
    return <button className={props.className} onClick={props.handleClick} /* style={{backgroundColor: "red"}} */>{props.text}</button>;
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
}
