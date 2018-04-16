export interface Comment {
    author: string;
    commentContent: string;
    commentDate: string;
    commentPhotoID: string;
}

export interface Photo {
    id: number;
    title: string;
    path: string;
    caption: string;
    comments: Comment[];
}

export interface PhotosJSON {
    photos: Photo[];
}