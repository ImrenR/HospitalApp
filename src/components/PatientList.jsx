import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ patients }) => {
  return (
    <div>
      {patients.map((hasta) => (
        <div>
          <div className="falseStyle">
            <div>
              <h2>{hasta.patientName}</h2>
              <h4>{hasta.day}</h4>
              <h3>{hasta.myDoctor}</h3>
            </div>
            <FaTimesCircle />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
