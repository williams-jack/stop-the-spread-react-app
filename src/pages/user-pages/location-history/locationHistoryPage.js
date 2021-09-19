import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getEntry } from "../../../services/user-services/locationsHistoryService";
import AddLocationHistoryEntryFormComponent from "./components/addLocationHistoryEntryForm";
import { addressToString } from "../../../services/serviceConstants";
const LocationHistoryPage = () => {
    const [addingEntry, setAddingEntry] = useState(false);
    const [entries, setEntries] = useState([]);

    const changeToEntryForm = () => {
        setAddingEntry(true);
    };

    useEffect(() => {
        getEntry()
            .then((res) => {
                if (res.status == 200) {
                    setEntries(res.data.entries);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setEntries]);

    const renderTableRow = (entry) => {
        return (
            <tr>
                <td>{addressToString(entry.businessLocation)}</td>
                <td>{entry.timeIn.toString()}</td>
                <td>{entry.timeOut.toString()}</td>
            </tr>
        );
    };

    const renderTable = () => {
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>Location</th>
                        <th>Date/Time In</th>
                        <th>Date/Time Out</th>
                    </thead>
                    <tbody></tbody>
                </table>
                <button className="btn btn-success" onClick={changeToEntryForm}>
                    Add Entry
                </button>
            </div>
        );
    };
    return addingEntry ? <AddLocationHistoryEntryFormComponent /> : renderTable;
};
export default LocationHistoryPage;
