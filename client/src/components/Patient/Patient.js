import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Patient.css";
const Patient = (props) => {
  const history = useNavigate();
  const { _id, name, dob, insurance, patient_id, medical_history} = props.patient;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3002/patient/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/patient"));
  };
return (
    <div className="card">
      <h2>Patient Name:{name}</h2>
      <h3>D.O.B:{dob}</h3>
      <h3>Insurance:{insurance}</h3>
      <h3>Patient ID: {patient_id}</h3>
      <h3>Medical History: {medical_history}</h3>
      <Button LinkComponent={Link} to={`/patient/${_id}`} sx={{ mt: "auto" }}>
        Update Patient Information
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete Patient Information
      </Button>
    </div>
  );
};

export default Patient;