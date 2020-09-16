import React, { Component } from "react";
import Specials from "./Specials";
import "./Specials.css";
import "./SpecialsRow.css";

class SpecialsRow extends Component {
  static defaultProps = {
    row: [
      { id: 1, name: "Spa Day", uniqueBonus: "Late checkout included", price: 399 },
      { id: 2, name: "3-Day Detox", uniqueBonus: "Unlimited Juice Bar Access, IV therapy", price: 699 },
      { id: 3, name: "The Breakup Package", uniqueBonus: "Hot Yoga, Kick-Boxing Class, Wine Tasting", price: 899 },
    ],
  };
  render() {
    return (
      <div className="SpecialsRow">
        <div className="Specials-cards">
          {this.props.row.map((p) => (
            <Specials id={p.id} name={p.name} uniqueBonus={p.uniqueBonus} price={p.price} />
          ))}
        </div>
        <strong>Summer sale on through August</strong>
        <br></br>
        <br></br>
          <p>Up to 20% off our popular treatment packages</p>
          <p>Refer a friend to get a 25$ voucher for our lounge</p>
      </div>
    );
  }
}

export default SpecialsRow;
