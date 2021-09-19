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
                    console.log(res);
                    setEntries(res.data);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [setEntries]);

    const renderTableRow = (entry) => {
        console.log("hello");
        console.log(entry);
        const addressString = addressToString(entry.businessLocation);
        const timeIn = entry.timeIn.toString();
        const timeOut = entry.timeOut.toString();
        return (
            <tr>
                <td>{addressString}</td>
                <td>{timeIn}</td>
                <td>{timeOut}</td>
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
                    <tbody>
                        {entries.map((entry) => {
                            return renderTableRow(entry);
                        })}
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={changeToEntryForm}>
                    Add Entry
                </button>
            </div>
        );
    };
    return addingEntry ? (
        <AddLocationHistoryEntryFormComponent setAddingEntry={setAddingEntry} />
    ) : (
        renderTable()
    );
};
export default LocationHistoryPage;
