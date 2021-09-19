import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
const AddLocationHistoryEntryFormComponent = () => {
    const [locationHistoryEntryInfo, setLocationHistoryEntryInfo] = useState(
        {}
    );
    const [businessNames, setBusinessNames] = useState([]);
    const [businessNameSelected, setBusinessNameSelected] = useState(false);
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {}, [setBusinessNames]);

    return (
        <div>
            <form>
                <div>
                    <select>
                        <option value="nothing"> </option>
                        {businessNames.map((name) => {
                            <option value={name}>name</option>;
                        })}
                        ;
                    </select>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </form>
        </div>
    );
};
export default AddLocationHistoryEntryFormComponent;
