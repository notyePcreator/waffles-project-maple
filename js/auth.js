// User Authentication System

// Function to register a new user.
function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        alert('User already exists!');
        return false;
    }
    users[username] = { password: password, displaySettings: {}, profile: {} };
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    return true;
}

// Function to log in a user.
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[username]) {
        alert('User not found!');
        return false;
    }
    if (users[username].password === password) {
        alert('Login successful!');
        return true;
    } else {
        alert('Incorrect password!');
        return false;
    }
}

// Function to customize username.
function customizeUsername(oldUsername, newUsername) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[oldUsername]) {
        alert('User not found!');
        return false;
    }
    if (users[newUsername]) {
        alert('New username already exists!');
        return false;
    }
    users[newUsername] = users[oldUsername];
    delete users[oldUsername];
    localStorage.setItem('users', JSON.stringify(users));
    alert('Username updated successfully!');
    return true;
}

// Function to manage display customization.
function customizeDisplay(username, settings) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[username]) {
        alert('User not found!');
        return false;
    }
    users[username].displaySettings = settings;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Display settings updated successfully!');
    return true;
}

// Function to manage user profile.
function updateProfile(username, profileData) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[username]) {
        alert('User not found!');
        return false;
    }
    users[username].profile = profileData;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Profile updated successfully!');
    return true;
}

// Example usage of the functions.
// registerUser('testUser', 'password123');
// loginUser('testUser', 'password123');
// customizeUsername('testUser', 'newUser');
// customizeDisplay('newUser', { theme: 'dark', fontSize: '16px' });
// updateProfile('newUser', { bio: 'Hello World', age: 30 });
