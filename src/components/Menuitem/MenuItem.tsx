import React from "react";
import "./MenuItem.css";

interface itemType {
  title: string;
  price: number;
  tags: string;
}

const MenuItem = (props: itemType) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {props.title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{props.price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {props.tags}
        </p>
      </div>
    </div>
  );
};
export default MenuItem;
