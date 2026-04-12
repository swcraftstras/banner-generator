// Types are only for jsdoc support and code complete in IDE

export type State = {
    title: string
    subtitle: string
    meetupLogoUrl: string
    speakers: Speaker[]
    sponsors: Sponsor[]
};

export type Speaker = {
    name: string
    photo_url: string | ArrayBuffer
}

export type Sponsor = {
    name: string
    logo_url: string | ArrayBuffer
}