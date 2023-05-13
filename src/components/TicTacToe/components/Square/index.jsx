import {useState} from "react";

export const Square = ({value, onSquareClick}) => {


    return <button className="Square" onClick={onSquareClick}>{value}</button>
}