import React, { useState } from 'react'
import './App.css';

function App() {
  const[validage,setvalidage]=useState(false)
  const[age,setage]=useState(0)
  const[validheight,setvalidheight]=useState(false)
  const[height,setheight]=useState(0)
  const[validweight,setvalidweight]=useState(false)
  const[weight,setweight]=useState(0)
  const[bmi,setbmi]=useState(0)
  const[underweight,setunderweight]=useState(false)
  const[normal,setnormal]=useState(false)
  const[overweight,setoverweight]=useState(false)
  const[obesity,setobesity]=useState(false)
  const[validsubmit,setvalidsubmit]=useState(false)
  const[validclc,setvalidclc]=useState(false)
  const[validres,setvalidres]=useState(false)




  const validinput=(e)=>{
    const {name,value}=e.target
if(name==='age'){
    if(!!value.match(/^[0-9]+$/)){
      setvalidage(false)
      setage(value)

    }
    else{
      setvalidage(true)
      setage(value)
    }
  }
  if(name==='height'){
    if(!!value.match(/^[0-9]+$/)){
      setvalidheight(false)
      setheight(value)

    }
    else{
      setvalidheight(true)
      setheight(value)
    }
  }
  if(name==='weight'){
    if(!!value.match(/^[0-9]+$/)){
      setvalidweight(false)
      setweight(value)

    }
    else{
      setvalidweight(true)
      setweight(value)
    }
  }
 
  }
  const handlesubmit =(e)=>{
    e.preventDefault()
    setvalidclc(true)
    setvalidsubmit(true)
    setvalidres(false)

   var bmic=(weight/((height/100)*(height/100))).toFixed(2)
    // mar()
    if(bmic<18.5){
      setunderweight(true)

    }
    else{
      setunderweight(false)
    }

     if (bmic>=18.5 && bmic<=24.9) {
      setnormal(true)
      
    }
    else{
      setnormal(false)
    }
     if (bmic>=25 && bmic<=29.9) {
      setoverweight(true)
      
    }
    else{
      setoverweight(false)
    }
     if (bmic>=30) {
      setobesity(true)
      
    }
    else{
      setobesity(false)
    }
    setbmi((weight/((height/100)*(height/100))).toFixed(2))
    setTimeout(myFunctionforgif, 3000,    setvalidclc
      );
    setTimeout(myFunction, 3015,   setvalidres 
    );
  }
  const myFunction = (arg1) => {
    arg1(true)
    // arg2(false)
    // Function code here
  };
  const myFunctionforgif = (arg1) => {
    arg1(false)
    // Function code here
  };
  // const mar =(e)=>{
    // if(bmi<18.5){
    //   setunderweight(true)

    // }
    // else{
    //   setunderweight(false)
    // }

    //  if (bmi>=18.5 && bmi<=24.9) {
    //   setnormal(true)
      
    // }
    // else{
    //   setnormal(false)
    // }
    //  if (bmi>=25 && bmi<=29.9) {
    //   setoverweight(true)
      
    // }
    // else{
    //   setoverweight(false)
    // }
    //  if (bmi>=30) {
    //   setobesity(true)
      
    // }
    // else{
    //   setobesity(false)
    // }
  // }
  return (
    <>
    <div className=' w-100 d-flex align-items-center justify-content-center bg-dark' style={{height:'100vh'}}>
            <div style={{width:'500px',height:'600px'}} className='bg-light p-5 rounded '>

      <form onSubmit={handlesubmit}>
        
        
        <h1 className='text-center'>BMI CALCULATOR</h1>
        <h4 className='text-center'>Body Mass Index</h4>
       
<div className='mb-3 w-100 mt-5'>
  <label htmlFor="age">Age</label>
          <input onChange={(e)=>validinput(e)} placeholder='Age'  type="text"  name='age' id='age' className='age w-100' style={{border:'none',borderBottom:'2px solid red'}}/>
          
          </div>
          
          {
        validage &&
        <div className='mb-3 text-danger fw-bolder'>
          *Invalid Age <br />
        </div>
       }

          <div className='mb-3 w-100'>
  <label htmlFor="height">Height</label>
          <input onChange={(e)=>validinput(e)} placeholder='Height(in cm)' type="text" name='height' id='height' className='w-100'  style={{border:'none',borderBottom:'2px solid red'}}/>
          </div>
          {
        validheight &&
        <div className='mb-3 text-danger fw-bolder'>
          *Invalid Height <br />
        </div>
       }

          <div className='mb-3 w-100'>
  <label htmlFor="pass">Weight</label>
          <input onChange={(e)=>validinput(e)} placeholder='Weight(in kg)'  type="text" name='weight' id='pass' className='w-100' style={{border:'none',borderBottom:'2px solid red'}}/>
          </div>
          
          {
        validweight &&
        
        <div className='mb-3 text-danger fw-bolder'>
          *Invalid Weight
        </div>
          }
       

       
       
         
       
         
       




          
          <div className='mb-3 w-100 mt-5 text-center'>
 <button  className='text-center w-100 btn btn-danger fw-bolder' style={{}} >Calculate</button>
          </div>
          


        {/* </div> */}
      </form>
      </div>

      {/* out div */}
      { validsubmit &&
      
      <div style={{width:'500px',height:'600px',marginLeft:'5px'}} className='bg-light p-5 rounded '>

       <h2 className='text-center'>Your BMI is</h2>
       {validres &&
       <div className=' w-100 d-flex flex-column align-items-center justify-content-center bg-dark' style={{width:'350px',height:'300px',marginTop:'50px'}}>

<div className=''>
<h4 className='text-center' style={{color:'green',marginTop:'-70px'}}>{bmi}</h4>

</div>

       <div className='row d-flex w-100' style={{color:'white'}}>


        <div className="col-3 bg-warning " style={{height:'21px'}}>
        <span style={{fontSize:'13px'}} >Underweight</span>
          

          
          <div className="row mt-2">
            <div className="col text-center">
              {
                underweight &&
            <span style={{}} >&#9650; </span>
              }

            </div>
          </div>
        </div>

        <div className="col-3 bg-success" style={{height:'21px'}}>
        <span style={{fontSize:'13px'}} >Normal</span>

          <div className="row mt-2">
            <div className="col text-center">
              {
                normal &&
            <span style={{}} >&#9650;</span>
              }

            
            
            </div>
          </div>
        </div>
        <div className="col-3 bg-warning" style={{height:'21px'}}>
        <span style={{fontSize:'13px'}} >Overweight</span>

          <div className="row mt-2">
            <div className="col text-center">
              { overweight &&
            <span style={{}} >&#9650;</span>
              }

            

            
            </div>
          </div>
        </div>
        <div className="col-3 bg-danger " style={{height:'21px'}}>
        <span style={{fontSize:'13px'}} >Obesity</span>


          <div className="row mt-2">
            <div className="col text-center">
              { obesity &&
            <span style={{}} >&#9650;</span>
              }

            

            
            </div>
          </div>
        </div>

       </div>


 </div>}



 { validclc &&
      

      <div className=' w-100 d-flex flex-column align-items-center justify-content-center bg-dark' style={{width:'350px',height:'300px',marginTop:'50px'}}>

<img style={{width:'100%',height:'100%'}} src="https://cdn.dribbble.com/users/470545/screenshots/3471475/calculater.gif" alt="" />

      




  

  





   
   
   


 {/* </div> */}

</div>}

 
   
 
   
 




    
    
    


  {/* </div> */}

</div>}






{/* out div end */}
    </div>
    

    
    </>
  )
}

export default App