import {saveState, state} from "./state.js";

export function addSpeaker() {
    const nameInput = document.getElementById('speakerName');
    const photoInput = document.getElementById('speakerPhoto');

    if (!nameInput.value || !photoInput.files[0]) {
        alert("Saisir un nom et ajouter un photo");
        return;
    }
    const speakerName = nameInput.value
    const file = photoInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const speakerData = {
            name: speakerName,
            photo_url: e.target.result
        };
        state.speakers.push(speakerData);
        saveState();
    };
    reader.readAsDataURL(file);

    nameInput.value = '';
    photoInput.value = '';
}

export function removeSpeaker(index) {
    state.speakers.splice(index, 1);
    saveState();
}

export function renderSpeakersList() {
    const speakersListEl = document.getElementById('speakersList');
    speakersListEl.innerHTML = state.speakers.map((speaker, index) => {
        return `
        <div class="dynamic-list-item">
            <span>${speaker.name}</span>
            <button id="remove-speaker-button-${index}" class="remove-button remove-speaker" >Supprimer</button>
        </div>
    `;
    }).join('');

    const removeSpeakerButtons = document.getElementsByClassName("remove-speaker")
    for (let i = 0; i < removeSpeakerButtons.length; i++) {
        const removeSpeakerButton = removeSpeakerButtons[i]
        removeSpeakerButton.addEventListener("click", () => {
            removeSpeaker(i)
        })
    }
}

document.getElementById('addSpeakerButton').addEventListener('click', addSpeaker);