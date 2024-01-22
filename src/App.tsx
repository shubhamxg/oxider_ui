import Cards from "./components/Cards/Cards";
import { Sidebar } from "./sidebar/Sidebar";

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
        </div>
        <div className="card-details">
          <Cards title="foo" subtitle="bar" />
        </div>
        <div className="card-stats">
          <Cards title="bar" subtitle="baz" />
        </div>
        <div className="card-top-domains">
          <Cards title="foo" subtitle="bar" />
        </div>
        <div className="card-apis">
          <Cards title="bar" subtitle="baz" />
        </div>
        <div className="dashboard-bottom">
          <h1>BOTTOM Placeholder</h1>
        </div>
      </div>
    </>
  );
}

export default App;
