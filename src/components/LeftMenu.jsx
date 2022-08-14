import React from 'react'
import './LeftMenu.css'
import {  Link } from "react-router-dom";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
const LeftMenu = () => {
  return (
    <>
    <div className="Menu">
<div className='Logo'>
    <p >Logo</p>
</div>
<div className='menuIcons'>
<div className='icon'><Link to="/" style={{color: "#5378FC"}}><GridViewIcon sx={{ fontSize: "30px" }}/></Link></div>
<div  className='icon'><Link to="/report" style={{color: "#5378FC"}}><SignalCellularAltIcon sx={{ fontSize: "30px" }}/></Link></div>
<div className='icon'><Link to="/profile" style={{color: "#5378FC"}}><PeopleAltOutlinedIcon sx={{ fontSize: "30px" }}/></Link></div>
{/* <div><img src={} alt="" /></div> */}
<div className='icon'><Link to="/setting" style={{color: "#5378FC"}}><img src="images/vector5.png"  alt="" /></Link></div>
<div className='icon'><img src="images/vector6.png"  alt="" /></div>
</div>
    </div>
    </>

  )
}

export default LeftMenu