import React, { useState, useEffect } from "react";
import "./AnalyticOverview.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setLineGraphHandler,
  setinsightsHandler,
  setHeadingHandler,
  setResponseHandler
} from "../store/graph";
import Chart from "chart.js/auto";
import DoughnutChart from "../components/chart/DoughnutChart";
import LineChart from "../components/LineChart";
const { readGraphData,readDataById } = require("../functions/graph");
const AnalyticOverView = () => {
  const dispatch = useDispatch();
  // const lineChartResponse = useSelector((state) => state.lineChartResponse);
  const graphData = useSelector((state) => state.graphData.lineGraph);
  const insights = useSelector((state) => state.graphData.insights);
  const heading = useSelector((state) => state.graphData.heading);
  const [show, setShow] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [userData, setUserData] = useState({});
  const [Options,setOptions] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await readGraphData();
      
      dispatch(setinsightsHandler(result.insights));
      dispatch (setResponseHandler(result));
      dispatch(setHeadingHandler(result.heading));
      
      const graphData = result.data.map((val) => {
        return {
          label: val.id,
          data: val.line.map((data) => data.y),
          
          borderColor: val.color,
          borderWidth: 2,
        };
      });
      const graph = {
        labels: result.data[0].line.map((data) => data.x),
        datasets: graphData,
      };
      setUserData(graph);
      dispatch(setLineGraphHandler(graph));
      setOptions({
        onClick: async(e, elements) => {
            console.log("working")
            const index=elements[0].datasetIndex;
            setShowGraph(false)
            const newresult = await readDataById(result.data[index].id);
            console.log(newresult)
            const graphData = newresult.data.map((val) => {
              return {
                label: val.id,
                data: val.line.map((data) => data.y),
              
                borderColor: val.color,
                borderWidth: 2,
              };
            });
            const graph = {
              labels: newresult.data[0].line.map((data) => data.x),
              datasets: graphData,
            };
            setUserData(graph);
            dispatch(setLineGraphHandler(graph));
        
            setShowGraph(true)
            setShow(true)
        },
      })
    };
    fetchData();
    setTimeout(() => {
      setShowGraph(true);
    }, 500);
  }, [dispatch]);
 
  const backButtonHandler = () => {
    setUserData(graphData);
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
          {showGraph && heading}
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
              // onClick={chartHandler}
            >
              {showGraph && <LineChart chartData={userData}  OptionsVal={Options}/>}
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
              {showGraph &&
                insights.map((val,ind) => {
                  return (
                    <p style={{ color: val.color }} key={ind}>
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
