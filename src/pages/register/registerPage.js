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
        <div>
            <label>Select Account Type</label>
            <select
                name="AcccountType"
                id="account-type"
                onChange={onAccountTypeChange}
            >
                <option value="User">Individual</option>
                <option value="Business">Business</option>
            </select>
            {accountType === "Business" ? (
                <BusinessSignUpFormComponent />
            ) : (
                <IndividualSignUpFormComponent />
            )}
            <Link to="/login">Already have an account? Login here.</Link>
        </div>
    );
};

export default RegisterPage;
