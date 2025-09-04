import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ patients, setPatients }) => {
  return (
    <div>
      {patients.map((hasta) => (
        <div>
          <div className={hasta.isDone ? "trueStil" : "falseStyle"}>
            <div>
              <h2>{hasta.patientName}</h2>
              <h4>{hasta.day}</h4>
              <h3>{hasta.myDoctor}</h3>
            </div>
            <FaTimesCircle 
            
            onClick={(a)=>setPatients(patients.filter((b)=> b.id != hasta.id))}
            
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
