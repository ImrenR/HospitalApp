import React, { useState } from "react";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [patients, setPatients] = useState(hastaData);
  const [magic, setMagic] = useState(true);

  const doctorClick = (dId) => {
    setDoctors(doctors.filter((b) => b.id == dId));
    setMagic(false);
  };

  return (
    <div style={{ display: magic ? "block" : "flex" }}>
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
                  onClick={() => doctorClick(dr.id)}
                  style={{ background: magic ? "" : "lightblue" }}
                />

                <h4
                  style={{ background: magic ? "" : "lightblue", borderLeft: `10px solid ${magic ? "" : "darkblue"}` }}
                  className="nameDr"
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!magic && <AddPatient />}
        
      </div>

      <PatientList patients={patients} setPatients={setPatients} />
    </div>
  );
};

export default Home;
