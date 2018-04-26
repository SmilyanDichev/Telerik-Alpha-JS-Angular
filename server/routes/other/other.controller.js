const init = (app, data) => {
    const getAllLinks = async () => {
        try {
            return await data.link.getAllLink();
        } catch (exception) {
            throw new Error(
                'Request to get all links rejected in other controller!\n' +
                exception);
        }
    };
    const getAllContacts = async () => {
        try {
            return await data.contacts.getAllContacts();
        } catch (exception) {
            throw new Error(
                'Request to get all contacts rejected in other controller!\n' +
                exception);
        }
    };
    return {
        getAllLinks,
        getAllContacts,
    };
};

module.exports = {
    init,
};
