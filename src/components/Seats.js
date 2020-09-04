import React from 'react';

const Seats = (props) => {
  let seats = []
  for(let i=0; i<props.max; i++) {
    seats.push(<button key={i} className={props.current === i+1 ? "selected" : ""} onClick={(e) => props.handleClick(e)}>{i+1}</button>)
  }
  return (
    <div className="seats">
      <h2>Please select the number of seats</h2>
      {seats}
    </div>
  );
}

export default Seats;
