"use strict"

window.onload = function (_event) {
    // Populate the select element  with park names
    const locationSelect = document.getElementById("locations")
    // ONCHANGE EVENT: Display the selected park
    locationSelect.onchange = renderMatchingParks
    // populate park type select element
    const parkSelect = document.getElementById("park-types")
    // display parks matching selected type
    parkSelect.onchange = renderMatchingTypes

    populateSelect(locationsArray, locationSelect)
    populateSelect(parkTypesArray, parkSelect)
}

function populateSelect(optionsArray, selectElement) {
    let html = ""
    for (let index = 0; index < optionsArray.length; index += 1) {
        const currentOption = optionsArray[index]
        html += `<option>${currentOption}</option>`
    }
    // ..

    selectElement.innerHTML += html
}

// currentPark.LocationName.includes(selectedParkType)
function renderMatchingParks(event) {
    const renderParks = event.target.value;
    let html = "";
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const parkObject = nationalParksArray[index];
        
        if (parkObject.State === renderParks) {
            html += `
                <div class="card">
                    <div class="card-body">
                        <h1>${parkObject.LocationID}</h1>
                        <h1>${parkObject.LocationName}</h1>
                        <h1>${parkObject.Address}</h1>
                        <h1>${parkObject.City}</h1>
                        <h1>${parkObject.State}</h1>
                        <h1>Zipcode: ${parkObject.ZipCode}</h1>
                        <h1>${parkObject.Phone}</h1>
                        <h1>${parkObject.Fax}</h1>
                        <h1>Coordinates: ${parkObject.Location.coordinates.toString()}</h1>
                    </div>
                </div>
            `
        }

    }
    const resultDiv = document.getElementById("park-cards")
    resultDiv.innerHTML = html
    
}

function renderMatchingTypes(event) {
    const parkType = event.target.value;
    let html = "";
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const park = nationalParksArray[index];
        
        if (park.LocationName.includes(parkType)) {
            html += `
                <div class="card">
                    <div class="card-body">
                        <h1>${park.LocationID}</h1>
                        <h1>${park.LocationName}</h1>
                        <h1>${park.Address}</h1>
                        <h1>${park.City}</h1>
                        <h1>${park.State}</h1>
                        <h1>Zipcode: ${park.ZipCode}</h1>
                        <h1>${park.Phone}</h1>
                        <h1>${park.Fax}</h1>
                        <h1>Coordinates: ${park.Location.coordinates.toString()}</h1>
                    </div>
                </div>
            `
        }

    }
    const resultDiv = document.getElementById("park-cards")
    resultDiv.innerHTML = html
}