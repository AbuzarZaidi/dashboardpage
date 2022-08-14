import { useEffect, useState } from 'react';
import './Doughnut.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, ],
        backgroundColor:[
          'red',
          
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      
  ], 
};

const DoughnutChart = () => {
    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
              'red',
              // 'blue',
              // 'yellow'
            ]
        },
      ],
      // labels: [
      //     'Red',
      //     'Yellow',
      //     'Blue'
      // ], 
    });
    const [lightOptions] = useState({
      cutout: 10,
      
    
        
    });
    //   useEffect(()=> {
    //     const fetchData = () =>  {
    //       fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
    //         const res = data.json();
    //         return res
    //       }).then((res) => {
    //         console.log("resss", res)
    //         // const label = [];
    //         const data = [];
    //         for(var i of res) {
    //             // label.push(i.name);
    //             data.push(i.id)
    //         }
    //         setData(
    //           {
    //             datasets: [{
    //                 data:[90,10],
    //                 backgroundColor:[
    //                   'red',
    //                   'white'
    //                 ]
    //             },
    //           ],
    //           // labels:label, 
    //         }
    //         )
    
    //       }).catch(e => {
    //         console.log("error", e)
    //       }) 
    //     }
    //   fetchData();
    //   }, [])
      return (
        <div className="App" style={{width:'30%', height:'30%'}}>
          
          <Doughnut data={data} options={lightOptions}/>
          <div class="donut-inner">
        <h5>production</h5>
        {/* <span>(30 / 25 st)</span> */}
    </div>
        </div>
      );
}

export default DoughnutChart