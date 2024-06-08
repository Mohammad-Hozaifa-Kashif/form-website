function signupFunc() {
    var getUsername = document.querySelector("#username").value;
    var getEmail = document.querySelector("#email").value;
    var getPassword = document.querySelector("#password").value;

    // Ensure that all fields are filled
    if (getUsername && getEmail && getPassword) {
        // Get existing users from local storage
        var users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists
        var userExists = users.some(user => user.username === getUsername);

        if (!userExists) {
            // Add new user to the users array
            users.push({
                username: getUsername,
                email: getEmail,
                password: getPassword
            });

            // Store the updated users array back to local storage
            localStorage.setItem('users', JSON.stringify(users));

            console.log("Data saved to local storage");
            // Redirect to signin page after signup
            location.href = './signin.html';
        } else {
            alert("Username already exists. Please choose a different username.");
        }
    } else {
        alert("Please fill out all fields");
    }
}

function loginFunc() {
    var getUsername = document.querySelector("#username").value;
    var getPassword = document.querySelector("#password").value;

    // Get existing users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any stored user
    var user = users.find(user => user.username === getUsername && user.password === getPassword);

    if (user) {
        // Store the logged-in user's username in local storage
        localStorage.setItem('loggedInUser', getUsername);

        Swal.fire({
            title: 'Welcome!',
            text: 'Welcome, ' + getUsername + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            location.href = './welcome.html';
        });
    } else {
        alert("INVALID USERNAME OR PASSWORD");
    }
}

function logout() {
    // Remove the logged-in user data without clearing all users
    localStorage.removeItem('loggedInUser');
    location.href = './signup.html';
    Swal.fire("LOGOUT SUCCESS");
}



