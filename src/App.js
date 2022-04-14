// import logo from './logo.svg';
// import './App.css';
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
