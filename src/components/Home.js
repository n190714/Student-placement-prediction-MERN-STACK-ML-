// /*import React, { useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import "./Login.css";

// function Home() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         username: '',
//         tenthMarks: '',
//         intermediateMarks: '',
//         btechMarks: '',
//         interestedDomain: ''
//     });

//     const handleProceed = () => {
//         setShowForm(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission, such as sending data to server
//         // Example: console.log(formData);
//     };

//     return (
//         <div className="login-box">
//             <h2>Hello, {location.state.id} and Welcome to the Home</h2>
//             {showForm ? (
//                 <form onSubmit={handleSubmit}>
//                     <div className="user-box">
//                         <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//                         <label>Username</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="tenthMarks" value={formData.tenthMarks} onChange={handleChange} required />
//                         <label>10th Marks</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="intermediateMarks" value={formData.intermediateMarks} onChange={handleChange} required />
//                         <label>Intermediate Marks</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="btechMarks" value={formData.btechMarks} onChange={handleChange} required />
//                         <label>BTech Marks</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="interestedDomain" value={formData.interestedDomain} onChange={handleChange} required />
//                         <label>Interested Domain</label>
//                     </div>

//                     <input type="submit" value="Predication"  />
//                 </form>
//             ) : (
//                 <button  className="proceed-button" onClick={handleProceed}>Proceed</button>
//             )}
//         </div>
//     );
// }

// export default Home;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./Login.css";

// function Home() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         sl_no: '', // Add sl_no if needed
//         gender: '',
//         ssc_p: '',
//         ssc_b: '',
//         hsc_p: '',
//         hsc_b: '',
//         hsc_s: '',
//         degree_p: '',
//         degree_t: '',
//         workex: '',
//         etest_p: '',
//         specialisation: '',
//         mba_p: ''
//     });
//     const [predictionResult, setPredictionResult] = useState('');

//     const handleProceed = () => {
//         setShowForm(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/student placement predication', formData);
//             setPredictionResult(response.data.prediction);
//         } catch (error) {
//             console.error('Error submitting form data', error);
//         }
//     };

//     return (
//         <div className="login-box">
//             <h2>Hello, {location.state.id} and Welcome to the Home</h2>
//             {showForm ? (
//                 <form onSubmit={handleSubmit}>
//                     <div className="user-box">
//                         <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
//                         <label>Gender</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="ssc_p" value={formData.ssc_p} onChange={handleChange} required />
//                         <label>10th Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="ssc_b" value={formData.ssc_b} onChange={handleChange} required />
//                         <label>10th Board</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="hsc_p" value={formData.hsc_p} onChange={handleChange} required />
//                         <label>12th Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="hsc_b" value={formData.hsc_b} onChange={handleChange} required />
//                         <label>12th Board</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="hsc_s" value={formData.hsc_s} onChange={handleChange} required />
//                         <label>12th Stream</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="degree_p" value={formData.degree_p} onChange={handleChange} required />
//                         <label>Degree Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="degree_t" value={formData.degree_t} onChange={handleChange} required />
//                         <label>Degree Type</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="workex" value={formData.workex} onChange={handleChange} required />
//                         <label>Work Experience</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="etest_p" value={formData.etest_p} onChange={handleChange} required />
//                         <label>E-Test Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="specialisation" value={formData.specialisation} onChange={handleChange} required />
//                         <label>MBA Specialisation</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="mba_p" value={formData.mba_p} onChange={handleChange} required />
//                         <label>MBA Percentage</label>
//                     </div>

//                     <input type="submit" value="Predict" />
//                 </form>
//             ) : (
//                 <button className="proceed-button" onClick={handleProceed}>Proceed</button>
//             )}
//             {predictionResult && <h3>Prediction: {predictionResult}</h3>}
//         </div>
//     );
// }

// export default Home;

// import React, { useState } from "react";
// import { useLocation } from 'react-router-dom';
// import "./Login.css";

// function Home() {
//     const location = useLocation();
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         gender: '',
//         ssc_p: '',
//         ssc_b: '',
//         hsc_p: '',
//         hsc_b: '',
//         hsc_s: '',
//         degree_p: '',
//         degree_t: '',
//         workex: '',
//         etest_p: '',
//         specialisation: '',
//         mba_p: ''
//     });
//     const [predictionResult, setPredictionResult] = useState('');

//     const handleProceed = () => {
//         setShowForm(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const placementMessage = getPlacementMessage(formData);
//         alert(placementMessage);
//     };

//     const getPlacementMessage = (data) => {
//         const ssc_p = parseFloat(data.ssc_p);
//         const hsc_p = parseFloat(data.hsc_p);
//         const degree_p = parseFloat(data.degree_p);
        
//         let placement = 'Not Placed';

//         switch (true) {
//             case (ssc_p >= 90 && hsc_p >= 90 && degree_p >= 90):
//                 placement = 'Placed';
//                 break;
//             case (ssc_p >= 80 && hsc_p >= 80 && degree_p >= 80):
//                 placement = 'Placed';
//                 break;
//             case (ssc_p >= 70 && hsc_p >= 70 && degree_p >= 70):
//                 placement = 'Placed';
//                 break;
//             case (ssc_p >= 60 && hsc_p >= 60 && degree_p >= 60):
//                 placement = 'Placed';
//                 break;
//             default:
//                 placement = 'Not Placed';
//         }

//         if (placement === 'Placed') {
//             // Calculate percentage based on criteria
//             let percentage = 0.0;

//             if (ssc_p >= 90 && hsc_p >= 90 && degree_p >= 90) {
//                 percentage = 0.99;
//             } else if (ssc_p >= 80 && hsc_p >= 80 && degree_p >= 80) {
//                 percentage = 0.90;
//             } else if (ssc_p >= 70 && hsc_p >= 70 && degree_p >= 70) {
//                 percentage = 0.80;
//             } else if (ssc_p >= 60 && hsc_p >= 60 && degree_p >= 60) {
//                 percentage = 0.70;
//             } else {
//                 percentage = 0.50; // Default percentage
//             }

//             return `${placement} with ${percentage * 100}% confidence`;
//         } else {
//             return placement;
//         }
//     };

//     return (
//         <div className="login-box">
//             <h2>Hello, {location.state.id} and Welcome to the Home</h2>
//             {showForm ? (
//                 <form onSubmit={handleSubmit}>
//                     <div className="user-box">
//                         <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
//                         <label>Gender</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="ssc_p" value={formData.ssc_p} onChange={handleChange} required />
//                         <label>10th Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="ssc_b" value={formData.ssc_b} onChange={handleChange} required />
//                         <label>10th Board</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="hsc_p" value={formData.hsc_p} onChange={handleChange} required />
//                         <label>12th Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="hsc_b" value={formData.hsc_b} onChange={handleChange} required />
//                         <label>12th Board</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="hsc_s" value={formData.hsc_s} onChange={handleChange} required />
//                         <label>12th Stream</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="degree_p" value={formData.degree_p} onChange={handleChange} required />
//                         <label>Degree Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="degree_t" value={formData.degree_t} onChange={handleChange} required />
//                         <label>Degree Type</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="workex" value={formData.workex} onChange={handleChange} required />
//                         <label>Work Experience</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="etest_p" value={formData.etest_p} onChange={handleChange} required />
//                         <label>E-Test Percentage</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="text" name="specialisation" value={formData.specialisation} onChange={handleChange} required />
//                         <label>MBA Specialisation</label>
//                     </div>
//                     <div className="user-box">
//                         <input type="number" name="mba_p" value={formData.mba_p} onChange={handleChange} required />
//                         <label>MBA Percentage</label>
//                     </div>

//                     <input type="submit" value="Predict" />
//                 </form>
//             ) : (
//                 <button className="proceed-button" onClick={handleProceed}>Proceed</button>
//             )}
//             {predictionResult && <h3>{predictionResult}</h3>}
//         </div>
//     );
// }

// export default Home;
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        gender: '',
        ssc_p: '',
        ssc_b: '',
        hsc_p: '',
        hsc_b: '',
        hsc_s: '',
        degree_p: '',
        degree_t: '',
        workex: '',
        etest_p: '',
        specialisation: '',
        mba_p: ''
    });

    const handleProceed = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const placementMessage = getPlacementMessage(formData);
        navigate('/prediction-result', { state: { placementMessage } });
    };

    const getPlacementMessage = (data) => {
        const ssc_p = parseFloat(data.ssc_p);
        const hsc_p = parseFloat(data.hsc_p);
        const degree_p = parseFloat(data.degree_p);
        
        let placement = 'Not Placed';

        switch (true) {
            case (ssc_p >= 90 && hsc_p >= 90 && degree_p >= 90):
                placement = 'Placed';
                break;
            case (ssc_p >= 80 && hsc_p >= 80 && degree_p >= 80):
                placement = 'Placed';
                break;
            case (ssc_p >= 70 && hsc_p >= 70 && degree_p >= 70):
                placement = 'Placed';
                break;
            case (ssc_p >= 60 && hsc_p >= 60 && degree_p >= 60):
                placement = 'Placed';
                break;
            default:
                placement = 'Not Placed';
        }

        if (placement === 'Placed') {
            // Calculate percentage based on criteria
            let percentage = 0.0;

            if (ssc_p >= 90 && hsc_p >= 90 && degree_p >= 90) {
                percentage = 0.99;
            } else if (ssc_p >= 80 && hsc_p >= 80 && degree_p >= 80) {
                percentage = 0.90;
            } else if (ssc_p >= 70 && hsc_p >= 70 && degree_p >= 70) {
                percentage = 0.80;
            } else if (ssc_p >= 60 && hsc_p >= 60 && degree_p >= 60) {
                percentage = 0.70;
            } else {
                percentage = 0.50; // Default percentage
            }

            return `${placement} with ${percentage * 100}% confidence`;
        } else {
            return placement;
        }
    };

    return (
        <div className="login-box">
            <h2>Hello, {location.state.id} and Welcome to the Home</h2>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                        <label>Gender</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="ssc_p" value={formData.ssc_p} onChange={handleChange} required />
                        <label>10th Percentage</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="ssc_b" value={formData.ssc_b} onChange={handleChange} required />
                        <label>10th Board</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="hsc_p" value={formData.hsc_p} onChange={handleChange} required />
                        <label>12th Percentage</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="hsc_b" value={formData.hsc_b} onChange={handleChange} required />
                        <label>12th Board</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="hsc_s" value={formData.hsc_s} onChange={handleChange} required />
                        <label>12th Stream</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="degree_p" value={formData.degree_p} onChange={handleChange} required />
                        <label>Degree Percentage</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="degree_t" value={formData.degree_t} onChange={handleChange} required />
                        <label>Degree Type</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="workex" value={formData.workex} onChange={handleChange} required />
                        <label>Work Experience</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="etest_p" value={formData.etest_p} onChange={handleChange} required />
                        <label>E-Test Percentage</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="specialisation" value={formData.specialisation} onChange={handleChange} required />
                        <label>MBA Specialisation</label>
                    </div>
                    <div className="user-box">
                        <input type="number" name="mba_p" value={formData.mba_p} onChange={handleChange} required />
                        <label>MBA Percentage</label>
                    </div>

                    <input type="submit" value="Predict" />
                </form>
            ) : (
                <button className="proceed-button" onClick={handleProceed}>Proceed</button>
            )}
        </div>
    );
}

export default Home;
