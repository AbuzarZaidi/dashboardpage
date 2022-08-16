import React,{useState} from 'react'
import './AnalyticOverview.css'
import Chart from 'chart.js/auto';
import DoughnutChart from '../components/chart/DoughnutChart';
import LineChart from '../components/LineChart'
import LineChartModal from '../components/Modal.jsx/LineChartModal';
import { UserData } from "../Data";

const AnalyticOverView = () => {
   const[modalOpen,setModalOpen]=useState(true)
   const[showModal,setShowModal]=useState(false)
   const [userData, setUserData] = useState({
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
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
    const openModalHandler=()=>{
      setShowModal(!showModal)

    }
  return (
    <>
     
    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
    <div className='container'>
       
        <div className='leftSection'>
        <h1 className="heading">Analytic Overview</h1>
        <div style={{display:"flex"}}>
         
        <DoughnutChart color="#5378FC" percentage={99} tagline="Production target met"/>
        <DoughnutChart color="#BC5AEA" percentage={88} tagline="Machine uptime"/>
        <DoughnutChart color="#5FC9C9" percentage={38} tagline="Raw material"/>
        <DoughnutChart color="#4846C0"percentage={14} tagline="Productivity " />
        


        </div>
        </div>
 <div className="dataShowing" style={{marginLeft:"90px",marginTop:"20px"}}>
    <div className='' style={{display:"flex"}}>
 <div style={{marginRight:"40px",marginTop:"20px"}}>
    <div style={{display:"flex",height:"46px"}}>
 <h2 className="font20">20</h2>
 <h2 className="per20">15.5% .</h2>
 </div>
    <p className="selection">Today's total escalation</p>
 </div>
 <div style={{marginTop:"20px"}}>
    <div style={{display:"flex",height:"46px"}}>
 <h2 className="font20">20</h2>
 <h2 className="font20">hr</h2>
 </div>
    <div className="arrow20"></div>
    <p className="selection">Today’s solve mean time between</p>
 </div>
 </div>
 <div className='' style={{display:"flex"}}>
 <div style={{marginRight:"40px"}}>
    <div style={{display:"flex",height:"56px"}}>
 <h2 className="font20">20</h2>
 <h2 className="per20">15.5% .</h2>
 </div>
    <p className="selection">Today's total escalation</p>
 </div>
 <div>
    <div style={{display:"flex",height:"56px"}}>
 <h2 className="font20">20</h2>
 <h2 className="font20">hr</h2>
 </div>
    <div className="arrow20"></div>
    <p className="selection">Today's total escalation</p>
 </div>
 </div>
 </div >
  
 </div>

   <p className='heading' style={{marginLeft:"60px",marginTop:"5px",marginBottom:"5px"}}>Organization production dip trend (Lower the better)</p>

   <div className='SecondSection'> 
<div className="lineChartSection" style={{marginLeft:"5%",marginRight:"5%",width:"900px",height:"300px",display:"flex",justifyContent:"center"}}>
   <div style={{width:"600px",height:"300px"}} onClick={openModalHandler}>
<LineChart chartData={userData} />
{showModal&&<LineChartModal userData={userData} openModal={modalOpen}/>}
    </div>
    
    </div>
<div className='errorSection'style={{width:"294px",height:"300px",marginRight:"7%",display:"flex"}}>
   <div style={{padding:"25px",fontSize:"16px"}}>
   <p style={{color:"#E52525"}}> <span style={{backgroundColor:"#E52525",width:"5px",height:"5px"}}>..</span> Factory 1 has critical issue. It dip 45% to previous month</p>
   <div >
   
   
   <p style={{color:"#073170"}}><span style={{backgroundColor:"#073170",width:"10px",height:"10px"}}>..</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit.</p>
  
   </div>
   </div>
   
  
 
</div>
   </div>
   </div>
 
    </>
  )
}

export default AnalyticOverView