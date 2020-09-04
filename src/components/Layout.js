import React from 'react';

const Layout = (props) => {
  return (
    <div className="layout">
      {props.hall.layout.map(item => {
        return (
          <div className="category" key={item.category}>
            <label className="title">{item.category.toUpperCase()} - Rs. {item.cost}</label>
            <hr />
            {item.rows.map(row => {
              return (
                <div className="row" key={row.sequence}>
                  <label className="sequence">{row.sequence}</label>
                  {row.seats.map(seat => {
                    return <button onClick={(e) => props.handleClick(e)} className={"booked" in seat ? "seat" : "seat hidden"} key={seat.id} disabled={seat.booked} value={row.sequence+seat.id} data-cost={item.cost} data-category={item.category}>{seat.id}</button>
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Layout;
