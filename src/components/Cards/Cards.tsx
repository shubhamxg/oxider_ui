import React from "react";
import "./styles.css";
import { CounterBox } from "../CounterBox/CounterBox";

function Cards({
  title,
  subtitle,
  type,
}: {
  title: string;
  subtitle: string;
  type: string;
}) {
  const stripe = [
    {
      counter_label: "Live",
      border_color: "green",
    },
    {
      counter_label: "Errors",
      border_color: "yellow",
    },
    {
      counter_label: "Dead",
      border_color: "red",
    },
    {
      counter_label: "Test",
      border_color: "grey",
    },
  ];

  // const api = [{}, {}, {}];

  const analysis = [
    {
      counter_label: "CPM",
      border_color: "foo",
    },
    {
      counter_label: "Checked",
      border_color: "foo",
    },
    {
      counter_label: "Exploit 1",
      border_color: "foo",
    },
    {
      counter_label: "Exploit 2",
      border_color: "foo",
    },
  ];
  return (
    <div className="card">
      <div className="block">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        {/* <StripeKeyCard /> */}
        <div className="grid-stack">
          <div className={"gap-counter " + type}>
            {(() => {
              if (type == "stripe-box") {
                return stripe.map((counter_box) => (
                  <CounterBox
                    clabel={counter_box.counter_label}
                    bcolor={counter_box.border_color}
                    counter="87,435"
                  />
                ));
              } else if (type == "stats-box") {
                return analysis.map((analysis_box) => (
                  <CounterBox
                    clabel={analysis_box.counter_label}
                    bcolor={analysis_box.border_color}
                    counter="87,435"
                  />
                ));
              } else {
                return <h1>FOO</h1>;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
