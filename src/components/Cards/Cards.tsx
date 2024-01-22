import React from "react";
import "./styles.css";

function Cards({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="card">
      <div className="block">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
      </div>
    </div>
  );
}

export default Cards;
