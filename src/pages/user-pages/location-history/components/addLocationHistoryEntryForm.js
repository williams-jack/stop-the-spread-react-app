import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { addressToString } from "../../../../services/serviceConstants";
import {
    getAddressFromBusinessName,
    getBusinessNames,
} from "../../../../services/user-services/businessInfoService";
import { addEntry } from "../../../../services/user-services/locationsHistoryService";

const renderAddressOption = (addressObject) => {
    return (
        <option value={addressObject._id}>
            {addressToString(addressObject)}
        </option>
    );
};

const AddLocationHistoryEntryFormComponent = (setAddingEntry) => {
    const [locationHistoryEntryInfo, setLocationHistoryEntryInfo] = useState(
        {}
    );
    const onInputChange = (event) => {
        const name = event.target.name;
        setLocationHistoryEntryInfo({
            ...locationHistoryEntryInfo,
            [name]: event.target.value,
        });
    };
    const getListOfBusinesses = async () => {
        const response = await getBusinessNames();
        console.log(response);
        return response.data["businessNames"];
    };
    const [businessName, setBusinessName] = useState("nothing");
    const onBusinessNameChange = (event) => {
        setBusinessName(event.target.value);
        if (businessName !== "nothing") {
            setBusinessNameSelected(true);
        }
    };
    //const receivedBusinessNames = getListOfBusinesses();
    const receivedBusinessNames = ["McDonald's"];
    console.log(receivedBusinessNames);
    const [businessNames, setBusinessNames] = useState(receivedBusinessNames);
    const [businessNameSelected, setBusinessNameSelected] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const timeOfDay = ["AM", "PM"];

    const onCancel = () => {
        setAddingEntry(false);
    };

    useEffect(() => {
        if (businessNameSelected) {
            getAddressFromBusinessName({ businessName })
                .then((res) => {
                    if (res.status == 200) {
                        setAddresses(res.data.addresses);
                    }
                })
                .catch((err) => console.error(err));
        }
    }, [businessNameSelected, businessName, setAddresses]);
    const onSubmit = () => {
        let hour = parseInt(locationHistoryEntryInfo.hour);
        if (locationHistoryEntryInfo.timeOfDay === "PM") {
            hour += 12;
        }

        let dateValues = locationHistoryEntryInfo.date.split("-");

        let timeIn = new Date();
        timeIn.setFullYear(parseInt(dateValues[0]));
        timeIn.setMonth(parseInt(dateValues[1]));
        const hours = hour + parseInt(dateValues[2]) * 24;
        timeIn.setHours(hours);

        let timeOut = timeIn;
        timeOut.setHours(timeOut.getHours() + 1);
        timeOut.setMinutes(30);

        let businessLocation = locationHistoryEntryInfo.businessLocation;

        const requestJSON = { timeIn, timeOut, businessLocation };
        console.log(requestJSON);
        addEntry(requestJSON).then(() => {});
    };

    return (
        <div>
            <form>
                <div className="mb-3 mt-2">
                    <label className="form-label" for="businessName"></label>
                    <select className="form-control" onChange={setBusinessName}>
                        <option value="nothing"> </option>
                        {businessNames.map((name) => {
                            <option value={name}>{name}</option>;
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label for="businessLocation">Select an Address:</label>
                    <select name="businessLocation" onChange={onInputChange}>
                        <option value="nothing"> </option>
                        {addresses.map((address) => {
                            renderAddressOption(address);
                        })}
                    </select>
                </div>
                <div className="mb-3 row">
                    <div className="col-l-6">
                        <label></label>
                        <input name="date" type="date" />
                    </div>
                    <div className="col-l-6">
                        <label className="form-label" for="hour"></label>
                        <select className="form-control" name="hour">
                            {hours.map((hour) => (
                                <option value={hour}>{hour}</option>
                            ))}
                        </select>
                        <label className="form-label" for="timeOfDay"></label>
                        <select className="form-control" name="timeOfDay">
                            {timeOfDay.map((timeOfDay) => (
                                <option value={timeOfDay}>{timeOfDay}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-m-6">
                        <button
                            className="btn btn-success w-50"
                            onClick={onSubmit}
                        >
                            Add Entry
                        </button>
                    </div>
                    <div className="col-m-6">
                        <button
                            className="btn btn-danger w-50"
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
export default AddLocationHistoryEntryFormComponent;
