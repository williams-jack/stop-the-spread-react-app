import React, { useState } from "react";
const COVIDStatusPage = () => {
    const [covidStatus, setCovidStatus] = useState("Negative");
    return (
        <div>
            <h2>Current COVID-19 Status</h2>
            <h1>{covidStatus}</h1>
            <button>
                Update Status to{" "}
                {covidStatus === "Negative" ? "Positive" : "Negative"}
            </button>
        </div>
    );
};
export default COVIDStatusPage;
