const init = (app, data) => {
    //Categories

    const getAllCategories = async () => {
        console.log('! ! !other controller categories ! ! !');
        // console.log(data.categories);
        // console.log(data.userJob);
        return await data.categories.getAll();
    };

    // Contacts
    const getAllContacts = async () => {
        console.log(' ! ! ! get get all contact controller');
        try {
            const allContacts = await data.contacts.getAll();
            console.log(allContacts);
            return allContacts;
        } catch (exception) {
            throw new Error(
                'Request to get all contacts rejected in other controller!\n' +
                exception);
        }
    };

    const createContact = async (contact) => {
        try {
            return await data.contacts.create(contact);
        } catch (exception) {
            throw new Error(
                'Request to create new contact rejected \n' +
                exception);
        }
    };

    const editContact = (contact) => {
        // TO DO
    };


    // Links
    const getAllLinks = async () => {
        try {
            return await data.link.getAllLink();
        } catch (exception) {
            throw new Error(
                'Request to get all links rejected in other controller!\n' +
                exception);
        }
    };

    const createLink = async (link) => {
        try {
            return await data.link.create(link);
        } catch (exception) {
            throw new Error(
                'Request to create new link rejected \n' +
                exception);
        }
    };

    const editLink = (link) => {
        // TO DO
    };

    return {
        getAllLinks,
        getAllContacts,
        createLink,
        createContact,
        editLink,
        editContact,
        getAllCategories,
    };
};

module.exports = {
    init,
};