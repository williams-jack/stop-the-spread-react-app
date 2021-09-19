import React from "react";

const [emailAndConfirmation, setEmailAndConfirmation] = React.useState({ email: "", confirmation: "" })
const [passwordAndConfirmation, setPasswordAndConfirmation] = React.useState({ password: "", confirmation: "" })

const onSubmit = () => { };

function handlePasswordChange(event) {
    setPasswordAndConfirmation({ password: event.target.value, ...confirmation })
}

function handleConfirmPasswordChange(event) {
    setPasswordAndConfirmation({ ...password, confirmation: event.target.value })
}

function handleEmailChange(event) {
    setEmailAndConfirmation({ email: event.target.value, ...confirmation })
}

function handleConfirmEmailChange(event) {
    setEmailAndConfirmation({ ...email, confirmation: event.target.value })
}

const IndividualSignUpFormComponent = () => {
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input className="form-control" name="username" type="text" />
            </div>
            <div className="mb-3 row">
                <div className="col-xl-6">
                    <label className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email" name="email"
                        value={emailAndConfirmation.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="col-xl-6">
                    <label className="form-label">Confirm Email</label>
                    <input
                        className="form-control"
                        type="email"
                        value={emailAndConfirmation.confirmation}
                        onChange={handleConfirmEmailChange}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-xl-6">
                    <label className="form-label">Password</label>
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        value={passwordAndConfirmation.password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="col-xl-6">
                    <label className="form-label">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        value={passwordAndConfirmation.confirmation}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
            </div>
            <div className="mb-2">
                <button
                    type="submit"
                    className="btn btn-success w-100"
                    disabled={!(emailAndConfirmation.email == emailAndConfirmation.confirmation) &&
                        !(passwordAndConfirmation.password == passwordAndConfirmation.confirmation)}>
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default IndividualSignUpFormComponent;
