import React, { useState } from "react";
import uuid from "react-uuid";

const AddPatient = ({patients, setPatients,doctors}) => {

const[name,setName]=useState("")
const[date,setDate]=useState("")

   const handleSubmit=(e)=> {
    e.preventDefault()

   setPatients(
    [<div styleName={styles.patients}></div>,

      {id:uuid(),
       patientName:name,
       day:date,
       isDone:false,
      myDoctor:doctors[0].doctorName }])
      }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
           
           onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
          onChange={(e)=>setDate(e.target.value)}
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            <span>{ } </span> Create a registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;