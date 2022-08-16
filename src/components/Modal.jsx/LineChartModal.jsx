import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LineChart from '../LineChart';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const LineChartModal = ({userData,openModal}) => {
    const [open, setOpen] = React.useState(openModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
       
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <div style={{width:"300px",height:"200px",}}>
<LineChart chartData={userData} />
    </div>
        </Grid>
        <Grid item xs={6}>
        <div style={{width:"300px",height:"200px",}}>
<LineChart chartData={userData} />
    </div>
        </Grid>
        <Grid item xs={6}>
        <div style={{width:"300px",height:"200px",}}>
<LineChart chartData={userData} />
    </div>
        </Grid>
        <Grid item xs={6}>
        <div style={{width:"300px",height:"200px",}}>
<LineChart chartData={userData} />
    </div>
        </Grid>
      </Grid>
    
      </Box>
    </Modal>
  </div>
  )
}

export default LineChartModal