import React, {useState} from "react";
import PatientList from "../components/PatientList"
import AddPatient from "../components/AddPatient";
import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(hastaData);

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
                />

                <h4 className="nameDr">{dr.doctorName}</h4>
              </div>
            ))}
          </div>
        </header>

        {/* <AddPatient /> */}
      </div>

      <PatientList />
    </div>
  );
};

export default Home;
