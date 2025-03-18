// Connect to the WebSocket server
const socket = new WebSocket("wss://" + window.location.host + "/ws");

// Listen for messages from the server
socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  document.getElementById("latitude").textContent = data.latitude;
  document.getElementById("longitude").textContent = data.longitude;
});

// Handle connection errors
socket.addEventListener("error", (error) => {
  console.error("WebSocket error:", error);
});