import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { PhotosJSON, Photo, Comment } from "./photos.model"; 

@Injectable()   
export class PhotoDataService {
    // the HTTP Client service
    private http:HttpClient;

    // urls for web api
    private retrieveScriptString = "http://ria.croweak.nscctruro.ca/retrieveAlbum.php";
    private sendScriptString = "http://ria.croweak.nscctruro.ca/submitComment.php";

    // photos json data
    public photos:Photo[];

    // the currently selected photo
    public selectedPhoto:Photo;
    public currentIndex:number;

    // has the data loaded
    public loaded:boolean = false;

    // inject HTTP Client service into this service
    constructor(myHttp:HttpClient) {
        this.http = myHttp;
    }

    // sets
    public set selectedIndex(value:number) {
        this.selectedPhoto = this.photos[value];
    }    

    // public methods
    public load():void {
        // hiding content
        this.loaded = false;

        this.http.get<PhotosJSON>(this.retrieveScriptString).subscribe(
            data => {
                // success
                let json:PhotosJSON = data;

                this.photos = json.photos;
                //this.photos = [];
                
                // maintaining the current index if user submitted a comment
                if (this.currentIndex != null) {
                    this.selectedPhoto = this.photos[this.currentIndex];
                } else {
                    // if this is first load sets the index to 0
                    this.currentIndex = 0; 
                    this.selectedPhoto = this.photos[0];
                }
                
                this.loaded = true;
            },
            err => {
                // error
                console.log("Error retreiving photo data")
            }
        )
    }
    // sending comments to the web API
    public send(authorIn:string,commentIn:string):void {

        console.log("sending JSON data");
        // json data to send
        let sendJSON = {
            "author": authorIn,
            "comment": commentIn,
            "photoID": (this.selectedPhoto.id)
        };

        let sendString:string = JSON.stringify(sendJSON);  

        // posting to web API
        this.http.post(this.sendScriptString,sendString)
          .subscribe(
            (res) => {
                console.log("POST Successful");
                this.load();
                // resetting the selected photo for persistence
                this.selectedIndex = (this.currentIndex);
            },
            err => {
                console.log("POST error", err);
            });

            
    }
}