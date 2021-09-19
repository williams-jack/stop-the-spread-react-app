import React, { useEffect, useState } from "react";
import AddLocationFormComponent from "./components/addLocationForm";
import LocationTableEntryComponent from "./components/locationTableEntry";
const locationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [addingLocation, setAddingLocation] = useState(false);

    // TODO: Add effect hook to pull locations from the backend.
    const renderTable = () => {
        return (
            <table>
                <thead>
                    <th>Location Address</th>
                </thead>
                <tbody>
                    {locations.map((location) => {
                        <LocationTableEntryComponent address={location} />;
                    })}
                </tbody>
            </table>
        );
    };
    return addingLocation ? <AddLocationFormComponent /> : renderTable();
};

export default locationsPage;
