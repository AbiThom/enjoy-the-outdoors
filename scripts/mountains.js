"use strict"

// TWO EVENTS:
// ONOAD EVENT: What happens when HTML & CSS are finished loading?
window.onload = function (_event) {
    // Populate the select element  with moutain names
    const mountainsSelect = document.getElementById("mountains")
    mountainsSelect.onchange = renderMountains
    // ONCHANGE EVENT: Display the selected mountain


    populateMountains(mountainsArray, mountainsSelect)
}

function populateMountains(mountainsArray, selectElement) {
    let html = "<option>Select a Mountain...</option>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const currentMountains = mountainsArray[index]
        html += `<option value="${currentMountains.name}">${currentMountains.name}</option>`
    }
    selectElement.innerHTML = html
}


/* 
    <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
*/
function renderMountains(event) {
    const renderCard = event.target.value
    
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const card = mountainsArray[index];

        if (card.name === renderCard) {
            html += `
            <div class="card">
                <h5 class="card-header">${card.name}</h5>
                <div class="card-body">
                    <h5 class="card-title">Elevation: ${card.elevation}</h5>
                    <h6 class="card-title">Effort: ${card.effort}</h6>
                    <img src="/data/images/${card.img}" alt=""> 
                    <p class="card-text">${card.desc}</p>
                    <h6>Latitude: ${card.coords.lat}<br>Longitude: ${card.coords.lng}</h6>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `
        }
        const resultDiv = document.getElementById("card")
        resultDiv.innerHTML = html
    }
}