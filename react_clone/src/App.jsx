import "./App.css";
import Navbar from "./Navbar";
import Poster from "./Poster/Poster";
import Sidebar from "./Sidebar/Sidebar";
import Calender from "./Calender/Calender";
import Course from "./Course/Course";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Poster />
      <Calender />
      <Course />
    </div>
  );
}

export default App;
