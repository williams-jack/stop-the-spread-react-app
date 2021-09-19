import React, { useState } from "react";

const AddLocationFormComponent = ({ setAddingLocation }) => {
    const [addressInfo, setAddressInfo] = useState({});
    const onInputChange = (event) => {
        const name = event.target.name;
        setAddressInfo({ ...addressInfo, [name]: event.target.value });
    };
    const onSubmit = () => {};
    const onCancel = () => {
        setAddingLocation(true);
    };
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label" for="addressLineOne">
                        Address Line One
                    </label>
                    <input
                        type="text"
                        name="addressLineOne"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="addressLineTwo">
                        Address Line Two
                    </label>
                    <input
                        type="text"
                        name="addressLineTwo"
                        className="form-control"
                    />
                </div>
                <div className="row mb-3">
                    <div className="col-m-3"></div>
                    <div className="col-m-3"></div>
                    <div className="col-m-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-l-6">
                        <button
                            className="btn btn-success w-100"
                            type="button"
                            onClick={onSubmit}
                        >
                            Add Location
                        </button>
                    </div>
                    <div className="col-l-6">
                        <button
                            className="btn btn-danger w-100"
                            type="button"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddLocationFormComponent;
