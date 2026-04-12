// State management
const defaultEvent = {
    title: "Event title",
    subtitle: "Event subtitle",
    meetupLogoUrl: "assets/swcraft-logo.png",
    speakers: [],
    sponsors: [
        {
            name: "La Plage Digitale",
            logo_url: "assets/plage-digitale-logo.png",
        }
    ]
};
/**
 * @type State
 */
export let state = defaultEvent;

export function loadState() {
    const savedState = localStorage.getItem('bannerState');
    if (savedState) {
        state = JSON.parse(savedState);
        // Populate form fields from loaded state
        document.getElementById('eventTitle').value = state.title;
        document.getElementById('eventSubtitle').value = state.subtitle;
    }
}

export const StateCallbacks = {
    onStateSaved: () => {
    }
}

export function resetState() {
    state = defaultEvent
    saveState()
    loadState()
}

export function saveState() {
    localStorage.setItem('bannerState', JSON.stringify(state));
    // Trigger registered callback
    // it avoids cyclic dependencies and removes duplication
    StateCallbacks.onStateSaved()
}
