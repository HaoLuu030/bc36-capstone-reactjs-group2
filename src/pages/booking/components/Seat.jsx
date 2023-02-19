import React from 'react'

export default function Seat(props) {
  return (
    <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-primary">{props.ele.tenGhe}</button>
  )
}
