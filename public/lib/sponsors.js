import {saveState, state} from "./state.js";

export function addSponsor() {
    const nameInput = document.getElementById('sponsorName');
    const photoInput = document.getElementById('sponsorPhoto');

    if (!nameInput.value || !photoInput.files[0]) {
        alert("Enter name and select logo.");
        return;
    }
    const sponsorName = nameInput.value
    const file = photoInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const sponsorData = {
            name: sponsorName,
            logo_url: e.target.result
        };
        state.sponsors.push(sponsorData);
        saveState();
    };
    reader.readAsDataURL(file);

    nameInput.value = '';
    photoInput.value = '';
}

export function removeSponsor(index) {
    state.sponsors.splice(index, 1);
    saveState();
}

export function renderSponsorsList() {
    const sponsorsListEl = document.getElementById('sponsorsList');
    sponsorsListEl.innerHTML = state.sponsors.map((sponsor, index) => `
        <div class="dynamic-list-item">
            <span>${sponsor.name}</span>
            <button id="remove-sponsor-button-${index}" class="remove-button remove-sponsor" >Remove</button>
        </div>
    `).join('');

    const removeSponsorButtons = document.getElementsByClassName("remove-sponsor")
    for (let i = 0; i < removeSponsorButtons.length; i++) {
        const removeSponsorButton = removeSponsorButtons[i]
        removeSponsorButton.addEventListener("click", () => {
            removeSponsor(i)
        })
    }
}

document.getElementById('addSponsorButton').addEventListener('click', addSponsor);
