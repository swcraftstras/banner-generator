import Canvas2Image from "./vendor/canvas2image/canvas2image.js";
import "./vendor/html2canvas/html2canvas-min.js";
import {renderSpeakersList} from "./speakers.js";
import {renderSponsorsList} from "./sponsors.js";
import {loadState, resetState, saveState, state, StateCallbacks} from "./state.js";

export function renderBanner() {
    const event = state;
    let html = '';

    html += `
        <p class="meetup-name">&lt; Software Craft Strasbourg &gt;</p>
        <hgroup class="header">
            <h1>${event.title}</h1>
            <p class="subtitle">${event.subtitle}</p>
        </hgroup>
`;
    html += `
        <div class="speakers-section">
            <div class="speaker-grid">`;
    if (event.speakers && event.speakers.length > 0) {
        event.speakers.slice(0, 3).forEach(speaker => { // Limit to 3
            html += `
                <div class="speaker-card">
                    <img src="${speaker.photo_url}" alt="${speaker.name} photo">
                </div>
            `;
        });
    }
    html += `
            </div>
        </div>`;

    // Sponsors Section
    html += `
        <div class="sponsors-section">
            <div class="sponsor-grid">`;
    if (event.sponsors && event.sponsors.length > 0) {
        event.sponsors.forEach(sponsor => {
            html += `
                <div class="sponsor-logo">
                    <img src="${sponsor.logo_url}" alt="${sponsor.name} logo">
                </div>`
        });
    }

    html += `<div class="sponsor-logo">
                    <img src="assets/swcraft-logo.png" alt="Meetup Logo" class="logo">
                </div>
            `;
    html += `
            </div>
        </div>`;
    const bannerContainer = document.getElementById('banner-container');
    bannerContainer.innerHTML = html;
}

// --- Image export
async function exportBanner() {
    const captureElement = document.getElementById('banner-container');
    if (!captureElement) {
        alert("Banner container not found.");
        return;
    }
    try {
        const canvas = await html2canvas(captureElement, {scale: 1,width:1200,height:675}) // Scale factor for resolution control
        downloadAsPng(canvas, 'swcraftstras_banner')
    } catch (err) {
        console.error("HTML to Canvas failed:", err);
        alert("Error rendering banner for export.");
    }
}

function downloadAsPng(canvas, fileName) {
    const width = canvas.width;
    const height = canvas.height;

    try {
        Canvas2Image.saveAsPNG(canvas, width, height, fileName)
    } catch (e) {
        console.error("Canvas2Image conversion failed:", e);
        alert("Error during image export.");
    }
}

document.getElementById('exportBannerButton').addEventListener('click', exportBanner);
document.getElementById('resetEventButton').addEventListener('click', resetState);

// Controls event handlers bindings
document.getElementById('eventTitle').addEventListener('input', (e) => {
    state.title = e.target.value;
    saveState();
});
document.getElementById('eventSubtitle').addEventListener('input', (e) => {
    state.subtitle = e.target.value;
    saveState();
});

function refreshEditor() {
    renderSpeakersList();
    renderSponsorsList();
    renderBanner();
}

loadState()
refreshEditor();

StateCallbacks.onStateSaved = refreshEditor
