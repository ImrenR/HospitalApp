import React, { useState } from 'react'
import AddPatient from '../components/AddPatient'
import PatientList from '../components/PatientList'
import { patientsData, doctorData } from '../data';


const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(patientsData);
  const [magic, setMagic] = useState(true)

  const doctorClick = (dId)=>{
  
    setDoctors(doctors.filter((k)=>k.id===dId))

  setMagic(false)

  setPatients(patients.filter((a)=> a.myDoctor===doctors[0].doctorName))
 }

  return ( 
    <div style={{display: magic ? "block" : "flex"}}>
     <div>
       <header>
        <h1>HOSPITAL OF PORTO</h1>
         <div className='dr'>
          {doctors.map((dr)=>(
      <div>
         <div>
            <img src={dr.doctorImg}
            width="160px" 
            height="190px"
            className='doctorBtn'
            alt=""
            style = {{background: magic ? "white": "lightgreen"}}
            onClick={()=>doctorClick(dr.id)}/> 
            <h4 style={{background: magic ? "white": "lightgreen", borderLeft: `5px solid ${magic ? "lightblue" : "lightgreen"} `}}>
          {dr.doctorName}</h4>
          </div>
       </div>
          ))}
         </div>
       </header>

        {!magic && <AddPatient patients={patients} setPatients={setPatients}  doctors={setDoctors}/> }

        </div>
         <PatientList patients={patients} setPatients={setPatients}/>
    </div>
  )};

export default Home