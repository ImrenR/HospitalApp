import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const PatientList = ({patients, setPatients}) => {
  return (
    <div>
 {patients.map((hasta)=>(
 <div> 
 <div className= {hasta.isDone ===true ? "trueStil" : "falseStyle"}
    onDoubleClick={()=>setPatients(patients.map((a)=>a.id===hasta.id ? {...hasta,isDone: !a.isDone}:a))}
 >
   <div>
     <h2>{hasta.patientName}</h2>
     <h4>{hasta.day}</h4>
     <h3>{hasta.myDoctor}</h3>
   </div>
   <MdDeleteForever onClick={()=>setPatients(patients.filter((b)=>b.id !==hasta.id))} style={{ color: "darkred" }}/>
 </div>
</div>
 ))}
     
    </div>

  )
}

export default PatientList