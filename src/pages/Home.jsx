import React, {useState} from "react";
import PatientList from "../components/PatientList"
import AddPatient from "../components/AddPatient";
import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(hastaData);

const [magic, setMagic] = useState(true)

const doctorClick=(dId)=>{
 setDoctors(doctors.filter((b)=>b.id == dId))
}
  return (
    <div style={{ display: "block" }}>
      <div>
        <header>
          <h1> Porto Care Hospital</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div className="doctorCard">
                <img 
                src={dr.doctorImg} 
                alt="" 
                width="160px"
                height="220px"
                className="doctorBtn"
                onClick={()=>doctorClick(dr.id)}
                />

                <h4 className="nameDr">{dr.doctorName}</h4>
              </div>
            ))}
          </div>
        </header>

        <AddPatient />
      </div>

      <PatientList patients={patients} setPatients={setPatients}/>
    </div>
  );
};

export default Home;
