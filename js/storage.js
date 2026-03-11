// js/storage.js

const StorageManager = (() => {
    const saveData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const loadData = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };

    const clearData = (key) => {
        localStorage.removeItem(key);
    };

    return {
        saveGameProgress: (progress) => saveData('gameProgress', progress),
        loadGameProgress: () => loadData('gameProgress'),
        savePlayerData: (playerData) => saveData('playerData', playerData),
        loadPlayerData: () => loadData('playerData'),
        saveFriendsList: (friends) => saveData('friendsList', friends),
        loadFriendsList: () => loadData('friendsList'),
        saveSettings: (settings) => saveData('settings', settings),
        loadSettings: () => loadData('settings'),
        clearGameData: () => clearData('gameProgress'),
        clearPlayerData: () => clearData('playerData'),
        clearFriendsList: () => clearData('friendsList'),
        clearSettings: () => clearData('settings')
    };
})();

// Example usage:
// StorageManager.saveGameProgress({ level: 1, score: 100 });
// const progress = StorageManager.loadGameProgress();

