let username = '';
let onlineUsers = [];

function setName() {
  const nameInput = document.getElementById('name');
  username = nameInput.value;
  nameInput.disabled = true;

  // Add the user to the list of online users
  onlineUsers.push(username);

  // Update the list of online users
  updateOnlineUsers();

  // Notify others in the chatroom about the new user
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = `${username} has joined the chatroom`;
  chatMessages.appendChild(messageElement);
}

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (username === '') {
    alert('Please enter your name first.');
    return;
  }
  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = `${username}: ${message}`;
  chatMessages.appendChild(messageElement);
  messageInput.value = '';
}

function updateOnlineUsers() {
  const onlineUsersElement = document.getElementById('online-users');
  onlineUsersElement.innerHTML = ''; // Clear previous list

  onlineUsers.forEach(user => {
    const userElement = document.createElement('li');
    userElement.textContent = user;
    onlineUsersElement.appendChild(userElement);
  });
}

// Open the profile modal
function openProfileModal() {
  document.getElementById('profileModal').style.display = 'block';
  document.getElementById('editName').value = username;
}

// Close the profile modal
function closeProfileModal() {
  document.getElementById('profileModal').style.display = 'none';
}

// Save the changes made to the profile
function saveProfile() {
  const newName = document.getElementById('editName').value;
  if (newName.trim() !== '') {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${username} changed their name to ${newName}`;
    chatMessages.appendChild(messageElement);
    username = newName;
    closeProfileModal();
    updateOnlineUsers();
  }
}
