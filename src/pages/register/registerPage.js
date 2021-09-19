import React, { useState } from "react";
import BusinessSignUpFormComponent from "./components/businessSignUpForm";
import IndividualSignUpFormComponent from "./components/individualSignUpForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [accountType, setAccountType] = useState("Individual");
    const onAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    return (
        <div className="">
            <div className="mb-3">
                <label className="form-label">Select Account Type</label>
                <select
                    name="AcccountType"
                    className="form-control"
                    id="account-type"
                    onChange={onAccountTypeChange}
                >
                    <option value="User">Individual</option>
                    <option value="Business">Business</option>
                </select>
            </div>
            {accountType === "Business" ? (
                <BusinessSignUpFormComponent />
            ) : (
                <IndividualSignUpFormComponent />
            )}
            <div className="d-flex flex-row justify-content-center mb-3">
                <Link to="/login">Already have an account? Login here.</Link>
            </div>
        </div>
    );
};

export default RegisterPage;
