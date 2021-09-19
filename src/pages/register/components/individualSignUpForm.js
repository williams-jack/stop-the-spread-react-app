import React from "react";

const onSubmit = () => {};

const IndividualSignUpFormComponent = () => {
    return (
        <form onSubmit={onSubmit}>
            <label>Username</label>
            <input name="username" type="text" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Confirm Email</label>
            <label>Password</label>
            <input name="password" type="password" />
            <label>Confirm Password</label>
            <input type="password" />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default IndividualSignUpFormComponent;
