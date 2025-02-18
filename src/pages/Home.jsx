import React, { useState } from 'react'
import AddPatient from '../components/AddPatient'
import PatientList from '../components/PatientList'
import { patientsData, doctorData } from '../data';


const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(patientsData);

  return (
    <div style={{display:"block"}}>
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
            alt=""/>
            <h4>{dr.doctorName}</h4>
          </div>
       </div>
          ))}
         </div>
       </header>
         <AddPatient/>
        </div>
         <PatientList patients={patients} setPatients={setPatients}/>
    </div>
  )};

export default Home