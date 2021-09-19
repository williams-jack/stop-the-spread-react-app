import React from "react";

const BusinessSignUpFormComponent = () => {
    const onSubmit = () => {};
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input name="username" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Business Name</label>
                <input
                    className="form-control"
                    name="BusinessName"
                    type="text"
                />
            </div>
            <div className="mb-3 row">
                <div className="col-xl-6">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" name="email" />
                </div>
                <div className="col-xl-6">
                    <label className="form-label">Confirm Email</label>
                    <input className="form-control" type="email" />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-xl-6">
                    <label className="form-label">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                    />
                </div>
                <div className="col-xl-6">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <div className="mb-2">
                <button className="btn btn-success w-100" type="submit">
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default BusinessSignUpFormComponent;
