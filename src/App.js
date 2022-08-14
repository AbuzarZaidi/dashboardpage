import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import AnalyticOverView from "./pages/AnalyticOverView";
import Setting from "./pages/Setting";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
import './App.css'
// import LineChart from "./components/LineChart";
// import { UserData } from "./Data";

function App() {


  return (
    <div className="App" style={{display:"flex",backgroundColor:"FCFCFC"}}>
     <LeftMenu/>
     <Routes>
        <Route path="/" element={<AnalyticOverView/>} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/report" element={<Report />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> */}
      
    </div>
  );
}

export default App;
