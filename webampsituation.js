const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                title: "Columns III - Column Dive"
            },
            url: "segamusic/Columns III - Column Dive.mp3"
        },
        {
            metaData: {
                title: "Galaxy Force II - Take Back"
            },
            url: "segamusic/Galaxy Force II - Take Back.mp3"
        },
        {
            metaData: {
                title: "Jewel Master - Fish Out of Water"
            },
            url: "segamusic/Jewel Master - Fish Out of Water.mp3"
        },
        {
            metaData: {
                title: "Sparkster - Stage 2"
            },
            url: "segamusic/Sparkster - Stage 2.mp3"
        },
        {
            metaData: {
                title: "Outrunners - Adventure"
            },
            url: "segamusic/Outrunners - Adventure.mp3"
        },
        {
            metaData: {
                title: "Revenge of Shinobi - Chinatown"
            },
            url: "segamusic/Revenge of Shinobi - Chinatown.mp3"
        },
        {
            metaData: {
                title: "Shining Force II - Elven Town"
            },
            url: "segamusic/Shining Force II - Elven Town.mp3"
        },
        {
            metaData: {
                title: "Fatal Labyrinth - Floors 1-9"
            },
            url: "segamusic/Fatal Labyrinth - Floors 1-9.mp3"
        },
        {
            metaData: {
                title: "Thunder Force IV - Space Walk.mp3"
            },
            url: "segamusic/Thunder Force IV - Space Walk.mp3"
        }
    ],
    initialSkin: {
        url: "Vectorman_Skin.wsz"
    }
});

webamp.renderWhenReady(document.getElementById("app"));