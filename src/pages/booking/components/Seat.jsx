import React, { useState } from 'react'

export default function Seat(props) {
  const [isSelected, setIsSelected] = useState(false);
  const populateClassName = () => {
    if(props.ele.daDat){
      return "btn-dark";
    }
    if (isSelected){
      return "btn-danger";
    }
    if(props.ele.loaiGhe === "Vip"){
      return "btn-warning";
    }
    return "btn-success";
  }
  const handleSelectSeat = () => {
    setIsSelected(!isSelected);
    props.handleSelected(props.ele);
  }
  return (
    <button 
    onClick={handleSelectSeat}
    disabled={props.ele.daDat}
    style={{ width: 30, height: 30, padding: 0 }} 
    className={`mr-1 mb-1 btn ${populateClassName()}`}>{props.ele.tenGhe}</button>
  )
}
