function verifyOrder() {
    const rawData = localStorage.getItem("_state");
    

   if (!rawData) {
        console.warn("Ingen data hittades i localStorage för '_state'");
        return null;
    }
    
    const data = JSON.parse(rawData);
    
    
    const firstIncomplete = Object.values(data).find(item => item.completed === false);
    if (firstIncomplete) {
        
        return firstIncomplete;
    } else {
        
        return null;
    }
}

