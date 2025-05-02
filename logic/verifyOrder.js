function verifyOrder() {
    const rawData = localStorage.getItem("_state");
    console.log(rawData);

   if (!rawData) {
        console.warn("Ingen data hittades i localStorage för '_state'");
        return null;
    }
    
    const data = JSON.parse(rawData);
    console.log(data);
    
    const firstIncomplete = Object.values(data).find(item => item.completed === false);
    if (firstIncomplete) {
        console.log("Första ofullständiga objektet:", firstIncomplete);
        return firstIncomplete;
    } else {
        console.log("Alla objekt är slutförda.");
        return null;
    }

    
}
