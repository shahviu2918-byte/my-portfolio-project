// Shared browser database for BuildFolio.
// This keeps app data in one place without requiring a backend server.

const DATABASE_KEYS = {
    users: "buildfolio_users",
    portfolioProfiles: "buildfolio_portfolio_profiles",
    messages: "buildfolio_messages"
};

const DATABASE_SEED = {
    users: [],
    portfolioProfiles: [],
    messages: []
};

function readCollection(key, fallbackValue) {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) {
        return fallbackValue;
    }

    try {
        return JSON.parse(storedValue);
    } catch (error) {
        return fallbackValue;
    }
}

function writeCollection(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
    return readCollection(DATABASE_KEYS.users, DATABASE_SEED.users);
}

function saveUsers(users) {
    writeCollection(DATABASE_KEYS.users, users);
}

function addUser(user) {
    const users = getUsers();
    users.push(user);
    saveUsers(users);
    return user;
}

function findUser(username, password) {
    return getUsers().find((user) => user.username === username && user.password === password) || null;
}

function getPortfolioProfiles() {
    return readCollection(DATABASE_KEYS.portfolioProfiles, DATABASE_SEED.portfolioProfiles);
}

function savePortfolioProfiles(portfolioProfiles) {
    writeCollection(DATABASE_KEYS.portfolioProfiles, portfolioProfiles);
}

function getMessages() {
    return readCollection(DATABASE_KEYS.messages, DATABASE_SEED.messages);
}

function saveMessages(messages) {
    writeCollection(DATABASE_KEYS.messages, messages);
}

window.BuildFolioDatabase = {
    getUsers,
    saveUsers,
    addUser,
    findUser,
    getPortfolioProfiles,
    savePortfolioProfiles,
    getMessages,
    saveMessages
};