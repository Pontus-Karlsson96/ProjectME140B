function renderMapLocations() {
    const data = locationObject;
    const storedData = JSON.parse(localStorage.getItem("_state"));
    const parent = document.getElementById('mapContainer');
    console.log(parent);
    const activeLocation = verifyOrder();
    const completed = [];

    parent.innerHTML = "";

   
    Object.values(storedData).forEach(x => {
        if (x.completed === true) {
            completed.push(x.storage_id);
        }
    });

   

    Object.values(data).forEach(item => {
        const card = document.createElement('div');
        card.classList.add('mapLocationCard');

        card.innerHTML = `
            <img src="../media/${item.id}.png" alt="location image">
            <div class="mapLocationCardInfo">
                <h5>${item.title}</h5>
                <p class="mapArrow">Öppna i kartor →</p>
            </div>
        `;

        if (completed.includes(item.id)) {
            card.classList.add("completed");
        
            const mapArrow = card.querySelector('.mapArrow');
            if (mapArrow) {
                mapArrow.remove();
            }
        
            const check = document.createElement('img');
            check.src = '../media/icons/check.svg';
            check.alt = 'Check icon';
            check.id = 'check';
            card.appendChild(check);
        
            const reopenBtn = document.createElement('button');
            reopenBtn.classList.add('reopenBtn');
            reopenBtn.textContent = "Återbesök platsen";
            reopenBtn.addEventListener('click', (event) => {
                event.preventDefault();
                structure.reopenObject(item);
            });
            card.appendChild(reopenBtn);
        }
         else if (!completed.includes(item.id)) {
            card.classList.add("notCompleted");

    
            if (!activeLocation || activeLocation.storage_id !== item.id) {
                const cover = document.createElement('div');
                cover.classList.add('cover');
                card.appendChild(cover);
            }
        }

        
        if (activeLocation && activeLocation.storage_id === item.id) {
            card.id = 'activeCard';
            card.classList.remove("notCompleted");

            const distanceP = document.createElement('p');
            distanceP.textContent = `Adress: ${item.adress}`;
            card.appendChild(distanceP);

            const mapArrow = card.querySelector('.mapArrow');
            mapArrow.addEventListener('click', () => {
                const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`;
                window.open(gmapsUrl, '_blank');
            });
        }

        parent.appendChild(card);
    });

    
    if (!activeLocation && !document.getElementById('scoreBtn')) {
        const scoreBtn = document.createElement('button');
        scoreBtn.id = 'scoreBtn';
        scoreBtn.classList.add('reopenBtn');
        scoreBtn.textContent = "Resultat";
        scoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            structure.finish();
        });

        const resultBtnParent = document.getElementById('mapContainer');
        const resultBtnContainer = document.createElement('div');
        resultBtnContainer.id='resultBtnContainer';
        resultBtnContainer.appendChild(scoreBtn);
        resultBtnParent.appendChild(resultBtnContainer);
    }
}
