import React,{useState} from 'react'

const Donut1 = ({val}) => {
    
    const[size,setSize]=useState(90)
   
  return (
    <>
    <div className="pie" > 
<div style={{display:"flex",flexDirection:"column"}}>
<span style={{fontSize:"22px", marginLeft:"30px"}}>50%</span>
<span style={{fontSize:"10px"}}>Production target met</span>
</div>
</div>
<style
// w=ad,p=aa,b=ab,c==ac
        dangerouslySetInnerHTML={{
            __html: `
           
  .pie {
    --p:90;
    --b:10px;
    --c:darkblue;
    --w:150px;
    
    width:var(--w);
    aspect-ratio:1;
    position:relative;
    display:inline-grid;
    margin:5px;
    place-content:center;
    font-size:25px;
    font-weight:bold;
    font-family:sans-serif;
  }
  .pie:before,
  .pie:after {
    content:"";
    position:absolute;
    border-radius:50%;
  }
  .pie:before {
    inset:0;
    background:
      radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
            mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
  }
  .pie:after {
    inset:calc(50% - var(--b)/2);
    background:var(--c);
    transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
  }
  .animate {
    animation:p 1s .5s both;
  }
  .no-round:before {
    background-size:0 0,auto;
  }
  .no-round:after {
    content:none;
  }
  @keyframes p {
    from{--p:0}
  } `
        }}
      />
</>
  )
}

export default Donut1