import Cards from "./components/Cards/Cards";
import Widgets from "./components/Widget/Widgets";
import { Sidebar } from "./sidebar/Sidebar";
import LinkIcon from "./assets/icons/link.svg?react";
import DatabaseIcon from "./assets/icons/database-purple.svg?react";
import PollIcon from "./assets/icons/lollipop.svg?react";
import CLineChart from "./components/ClineChart/CLineChart";

function App() {
  return (
    <>
      <div className="parent">
        <div className="heading">
          <h3>LOGO</h3>
        </div>
        <div className="div2">
          <Sidebar />
        </div>
        <div className="dashboard-card">
          <h1>PARSER Placeholder</h1>
          <div className="widget-align">
            <div className="widget-icon">
              <PollIcon width="45" height="50" fill="orange"/>
              <Widgets title="542" caption="Checked" />
            </div>
            <div className="widget-icon">
              <LinkIcon width="45" height="50" fill="lightgreen"/>
              <Widgets title="84,658" caption="Urls per minute" />
            </div>

            <div className="widget-icon">
              <DatabaseIcon width="45" height="50" fill="purple"/>
              <Widgets title="64,234" caption="Total results" />
            </div>
          </div>
          <div className="row">
            <div className="mixed-chart">
              <h2 className="dashboard-subtitles">Speed</h2>
              <div className="clinechart">
                <CLineChart />
              </div>
            </div>
          </div>
        </div>
        <div className="card-details">
          <Cards title="Stripe" subtitle="Keys" type="stripe-box" />
        </div>
        <div className="card-stats">
          <Cards title="API" subtitle="Keys" />
        </div>
        <div className="card-top-domains">
          <Cards title="Analysis" subtitle="Details" type="stats-box"/>
        </div>
        <div className="card-apis">
          <Cards title="Vulnerable" subtitle="Url Details" />
        </div>
        <div className="dashboard-bottom">
          <h1>BOTTOM Placeholder</h1>
          <p>TODO: Thread settings. </p>
        </div>
      </div>
    </>
  );
}

export default App;
