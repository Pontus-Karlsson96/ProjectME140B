function renderMapLocations() {
    const data = locationObject;
    const storedData = JSON.parse(localStorage.getItem("_state"));
    const parent = document.getElementById('mapContainer');
    const activeLocation = verifyOrder();
    const completed = [];
    

    parent.innerHTML = "";


    Object.values(storedData).forEach(x => {

        if (x.completed === true) {
            completed.push(x.storage_id);
        }
        else if (x.completed === false){
           return;
        }

    });
    
    Object.values(data).forEach(item => {
        const card = document.createElement('div');
        card.classList.add('mapLocationCard');

        card.innerHTML = `
            <img src="../media/600x400.svg" alt="location image">
            <div class="mapLocationCardInfo">
                <h5>${item.title}</h5>
                <p class="mapArrow">Öppna i kartor <img src="../media/icons/arrow.svg"></p>
                
            </div>
        `;

        if (completed.includes(item.id)) {
           
            card.classList.add("completed")
            card.classList.remove("notCompleted")

            const check = document.createElement('img');
            check.setAttribute('src', '../media/icons/check.svg');
            check.setAttribute('alt', 'Check icon');
            check.id = 'check';
            card.appendChild(check);

            const reopenBtn = document.createElement('button');
            reopenBtn.classList.add('reopenBtn');
            reopenBtn.textContent = "Återbesök platsen";
            reopenBtn.addEventListener('click', (event) => {
            event.preventDefault();

            structure.reopenObject(item);
            console.log('reopen item:', item);

    });
    card.appendChild(reopenBtn);
            
        } else if (!completed.includes(item.id) && activeLocation.storage_id !== item.id) {
            card.classList.add("notCompleted")
            const cover = document.createElement('div');
            cover.classList.add('cover');
            card.append(cover);
        };

        if (activeLocation.storage_id === item.id) {
            card.id = 'activeCard';
            card.classList.remove("notCompleted")


            //ändra till items adress
            
            const distanceP = document.createElement('p');
            distanceP.textContent = `Adress: ${item.adress}`;
            console.log(item.adress);

            card.appendChild(distanceP);

            const mapArrow = card.querySelector('.mapArrow');
            mapArrow.addEventListener('click', () => {
            console.log(item.lat, item.lon)
            const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`;
            
            window.open(gmapsUrl, '_blank');
});

        }

       
        parent.appendChild(card);
    });
}


