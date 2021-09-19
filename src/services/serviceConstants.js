// Variables used by most or all service functions.
const backendURL = "http://localhost:5000";

const addressToString = (addressObject) => {
    if (!addressObject.addressLineTwo) {
        console.log("Has now second line.");
        return (
            `${addressObject.addressLineOne},` +
            ` ${addressObject.city}, ${addressObject.state} ${addressObject.zipcode}`
        );
    } else {
        console.log("Has line 2.");
        const addressString =
            `${addressObject.addressLineOne} ${addressObject.addressLineTwo},` +
            ` ${addressObject.city}, ${addressObject.state} ${addressObject.zipCode}`;
        console.log(addressString);
        return addressToString;
    }
};

export { backendURL, addressToString };
