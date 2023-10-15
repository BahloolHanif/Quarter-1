function make_album(artist: string, title: string, tracks?: number): Record<string, string | number> {
    const album: Record<string, string | number> = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three album objects
const album1 = make_album("Artist1", "Album 1");
const album2 = make_album("Artist2", "Album 2", 12);
const album3 = make_album("Artist3", "Album 3", 8);

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
