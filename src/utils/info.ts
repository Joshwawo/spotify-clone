const baseUrl = 'http://127.0.0.1:8000';

// Generated by https://quicktype.io

export interface NewReleases {
    albums: Albums;
}

export interface Albums {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          ArtistType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ArtistType {
    Artist = "artist",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
}


export const getNewReleases = async (limit: number = 10, offset: number = 0): Promise<NewReleases> => {
    try {
        const response = await fetch(`${baseUrl}/v2/browse/new-releases?country=ES&limit=${limit}&offset=${offset}`);
        const data = await response.json();
        console.log("Id", Math.floor(Math.random() * 50))
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}