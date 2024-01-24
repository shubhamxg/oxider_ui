// import '../../public';
import "./styles.css";
function Widgets({ title, caption }: { title: string; caption: string }) {
  return (
    <>
      <div className="widget-text">
        <h2 className="widget-h">{title}</h2>
        <h5>{caption}</h5>
      </div>
    </>
  );
}

export default Widgets;
