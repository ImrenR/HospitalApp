import React, { useState } from "react";
import uuid from "react-uuid";
const AddPatient = ({ patients, setPatients, doctors }) => {
  const [isim, setIsim] = useState("");
  const [tarih, setTarih] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isim || !tarih) {
      alert("Please enter both name and date");
      return;
    }
    // hastalar dizisinin diğer 6 elemanı dursun, 7. yi ekle işlemini ... ile yapıyoruz, uuid() bize unique id veren bir kütüphane
    setPatients([
      ...patients,
      {
        id: uuid(),
        patientName: isim,
        day: tarih,
        isDone: false,
        myDoctor: doctors[0].doctorName,
      },
    ]);

    setIsim("");
    setTarih("");
  };

  console.log(patients);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            id="datetime"
            type="datetime-local"
            onChange={(e) => setTarih(e.target.value)}
            value={tarih}
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            Create Appoitment <span>{}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
