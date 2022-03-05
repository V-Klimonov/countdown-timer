import "./App.css";
import "./components/Timer/Timer";
import Timer from "./components/Timer/Timer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="page">
      <div className="main">
        <h1 className="title">we're launching soon</h1>
        <Timer></Timer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
