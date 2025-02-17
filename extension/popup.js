document.getElementById('blockButton').addEventListener('click', function() {
    fetch("http://127.0.0.1:5000/add_block", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": "https://www.instagram.com" })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent = "Instagram is now blocked!";
    })
    .catch(error => {
        document.getElementById('status').textContent = "Failed to block Instagram!";
    });

    fetch("http://127.0.0.1:5000/add_block", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": "https://www.messenger.com" })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent += " Messenger is now blocked!";
    })
    .catch(error => {
        document.getElementById('status').textContent += " Failed to block Messenger!";
    });
});

document.getElementById('unblockButton').addEventListener('click', function() {
    fetch("http://127.0.0.1:5000/remove_block", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": "https://www.instagram.com" })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent = "Instagram is now unblocked!";
    })
    .catch(error => {
        document.getElementById('status').textContent = "Failed to unblock Instagram!";
    });

    fetch("http://127.0.0.1:5000/remove_block", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "url": "https://www.messenger.com" })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent += " Messenger is now unblocked!";
    })
    .catch(error => {
        document.getElementById('status').textContent += " Failed to unblock Messenger!";
    });
});
