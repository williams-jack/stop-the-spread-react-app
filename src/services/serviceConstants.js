// Variables used by most or all service functions.
const backendURL = "http://localhost:5000";

const addressToString = (addressObject) => {
    if (!addressObject.addressLineTwo) {
        return (
            `${addressObject.addressLineOne},` +
            ` ${addressObject.city}, ${addressObject.state} ${addressObjec.zipcode}`
        );
    } else {
        return (
            `${addressObject.addressLineOne} ${addressObject.addressLineTwo},` +
            ` ${addressObject.city}, ${addressObject.state} ${addressObjec.zipcode}`
        );
    }
};

export { backendURL, addressToString };
