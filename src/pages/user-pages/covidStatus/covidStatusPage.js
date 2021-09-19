import React, { useState } from "react";
const COVIDStatusPage = () => {
    const [covidStatus, setCovidStatus] = useState("Negative");
    return (
        <div>
            <div className="d-flex flex-column justify-content-center">
                <h2 className="d-flex justify-content-center">
                    Current COVID-19 Status
                </h2>
                <h3 className="d-flex justify-content-center">{covidStatus}</h3>
                <button className="btn-lg btn-danger">
                    Update Status to{" "}
                    {covidStatus === "Negative" ? "Positive" : "Negative"}
                </button>
            </div>
        </div>
    );
};
export default COVIDStatusPage;
