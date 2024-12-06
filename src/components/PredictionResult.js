import React from 'react';
import { useLocation } from 'react-router-dom';

function PredictionResult() {
    const location = useLocation();
    const placementMessage = location.state.placementMessage;

    return (
        <div className="login-box">
            <h2>Prediction Result</h2>
            <h3>{placementMessage}</h3>
        </div>
    );
}

export default PredictionResult;
