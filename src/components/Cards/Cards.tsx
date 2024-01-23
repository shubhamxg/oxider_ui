import React from "react";
import "./styles.css";
import { CounterBox } from "../CounterBox/CounterBox";

function Cards({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="card">
      <div className="block">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <CounterBox bcolor="green"/>
      </div>
    </div>
  );
}

export default Cards;
