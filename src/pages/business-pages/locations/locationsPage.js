import React, { useEffect, useState } from "react";
import AddLocationFormComponent from "./components/addLocationForm";
import LocationTableEntryComponent from "./components/locationTableEntry";
const locationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [addingLocation, setAddingLocation] = useState(false);

    // TODO: Add effect hook to pull locations from the backend.
    const bringInAddForm = () => {
        setAddingLocation(true);
    };
    const renderTable = () => {
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>Location Address</th>
                    </thead>
                    <tbody>
                        {locations.map((location) => {
                            <LocationTableEntryComponent address={location} />;
                        })}
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={bringInAddForm}>
                    Add Location
                </button>
            </div>
        );
    };
    return addingLocation ? (
        <AddLocationFormComponent setAddingLocation={setAddingLocation} />
    ) : (
        renderTable()
    );
};

export default locationsPage;
