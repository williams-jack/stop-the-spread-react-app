import React from "react";

const onSubmit = () => {};

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
                        className="form-control"
                        name="password"
                        type="password"
                    />
                </div>
                <div className="col-xl-6">
                    <label className="form-label">Confirm Password</label>
                    <input className="form-control" type="password" />
                </div>
            </div>
            <div className="mb-2">
                <button type="submit" className="btn btn-success w-100">
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default IndividualSignUpFormComponent;
