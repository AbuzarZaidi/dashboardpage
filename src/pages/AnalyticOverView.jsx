import React, { useState, useEffect } from "react";
import "./AnalyticOverview.css";
import Chart from "chart.js/auto";
import DoughnutChart from "../components/chart/DoughnutChart";
import LineChart from "../components/LineChart";
import { UserData, User2Data, User3Data } from "../Data";
const { readGraphData } = require("../functions/graph");
const AnalyticOverView = () => {
  const [show, setShow] = useState(false);
  const [insights, setInsights] = useState([]);
  const [lineGraph, setLineGraph] = useState([]);
  const [showGraph,setShowGraph]=useState(false)
  const [userData, setUserData] = useState({})
  // const [userData, setUserData] = useState({
  //   labels: lineGraph.line.map((data) => data.x),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "rgb(102,206,207)",
  //       borderWidth: 2,
  //     },
  //   ],
  // });
  useEffect(() => {
    
    const fetchData = async () => {
      const result = await readGraphData();
    
      setInsights(result.insights);
      const graphData=result.data.map((val)=>{
       
       return{
        label: "Dip Trend",
         data: val.line.map((data) => data.y),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(102,206,207)",
        borderWidth: 2,
      }    
      });
      const graph={
        labels: result.data[0].line.map((data) => data.x),
        datasets: graphData
      }
      console.log(graphData)
      setUserData(
        graph
      )
      setLineGraph(result.data)
    };
    fetchData();
    setTimeout(() => {
      setShowGraph(true)
    }, 500);
    
  }, []);
  const chartHandler = () => {
    setShow(true);
    setUserData({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "rgb(102,206,207)",
          borderWidth: 2,
        },
        {
          label: "Users Gained",
          data: User2Data.map((data) => data.userGain),
          backgroundColor: [
            "rgb(215, 112, 95)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "rgb(83,120,252)",
          borderWidth: 2,
        },
        {
          label: "Users Gained",
          data: User3Data.map((data) => data.userGain),
          backgroundColor: [
            "rgb(215, 112, 95)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "rgb(72,70,192)",
          borderWidth: 2,
        },
      ],
    });
    setShow(true);
  };
  const backButtonHandler = () => {
    setUserData({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "rgb(102,206,207)",
          borderWidth: 2,
        },
      ],
    });
    setShow(false);
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div className="container">
          <div className="leftSection">
            <h1 className="heading">Analytic Overview</h1>
            <div style={{ display: "flex" }}>
              <DoughnutChart
                color="#5378FC"
                percentage={99}
                tagline="Production target met"
              />
              <DoughnutChart
                color="#BC5AEA"
                percentage={88}
                tagline="Machine uptime"
              />
              <DoughnutChart
                color="#5FC9C9"
                percentage={38}
                tagline="Raw material"
              />
              <DoughnutChart
                color="#4846C0"
                percentage={14}
                tagline="Productivity "
              />
            </div>
          </div>
          <div
            className="dataShowing"
            style={{ marginLeft: "90px", marginTop: "20px" }}
          >
            <div className="" style={{ display: "flex" }}>
              <div style={{ marginRight: "40px", marginTop: "20px" }}>
                <div style={{ display: "flex", height: "46px" }}>
                  <h2 className="font20">20</h2>
                  <h2 className="per20">15.5% .</h2>
                </div>
                <p className="selection">Today's total escalation</p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", height: "46px" }}>
                  <h2 className="font20">20</h2>
                  <h2 className="font20">hr</h2>
                </div>
                <div className="arrow20"></div>
                <p className="selection">Today’s solve mean time between</p>
              </div>
            </div>
            <div className="" style={{ display: "flex" }}>
              <div style={{ marginRight: "40px" }}>
                <div style={{ display: "flex", height: "56px" }}>
                  <h2 className="font20">20</h2>
                  <h2 className="per20">15.5% .</h2>
                </div>
                <p className="selection">Today's total escalation</p>
              </div>
              <div>
                <div style={{ display: "flex", height: "56px" }}>
                  <h2 className="font20">20</h2>
                  <h2 className="font20">hr</h2>
                </div>
                <div className="arrow20"></div>
                <p className="selection">Today's total escalation</p>
              </div>
            </div>
          </div>
        </div>

        <p
          className="heading"
          style={{ marginLeft: "60px", marginTop: "5px", marginBottom: "5px" }}
        >
          {show && (
            <img
              src="images/backButton.png"
              alt=""
              style={{ width: "25px", height: "25px", marginTop: "10px" }}
              onClick={backButtonHandler}
            />
          )}{" "}
          Organization production dip trend (Lower the better)
        </p>

        <div className="SecondSection">
          <div
            className="lineChartSection"
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              width: "900px",
              height: "300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: "600px", height: "300px" }}
              onClick={chartHandler}
            >
              {showGraph&&<LineChart chartData={userData} />}
            </div>
          </div>
          <div
            className="errorSection"
            style={{
              width: "294px",
              height: "300px",
              marginRight: "7%",
              display: "flex",
            }}
          >
            <div style={{ padding: "25px", fontSize: "16px" }}>
              {showGraph&&insights.map((val) => {
                return (
                  <p style={{ color: val.color }}>
                    {" "}
                    <span
                      style={{
                        backgroundColor: val.color,
                        width: "5px",
                        height: "5px",
                        marginRight: "2px",
                      }}
                    >
                      ..
                    </span>
                    {val.insight}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticOverView;
