const ws = new WebSocket("ws://localhost:8888/ws");

        ws.onopen = () => {
            console.log("Connected to WebSocket server");
        };

        ws.onmessage = (event) => {
            console.log("Received location update:", event.data);
        };

        ws.onclose = () => {
            console.log("Disconnected from WebSocket server");
        };

        // Simulate sending location updates
        setInterval(() => {
            const location = {
                latitude: Math.random() * 180 - 90,
                longitude: Math.random() * 360 - 180
            };
            ws.send(JSON.stringify(location));
        }, 5000);