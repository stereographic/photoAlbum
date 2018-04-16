import { Component } from '@angular/core';
import { PhotoDataService } from "../PhotoData.service";
import { ModalService } from "../Modal.service";


@Component({
    selector: "add-comment",
    templateUrl: "./addComment.component.html",
})
export class AddCommentComponent {

    // declaring service variables
    public photoData:PhotoDataService;
    public modalData:ModalService;

    // variables for validating the user inputs
    public authorError:boolean = false;
    public commentError:boolean = false;

    // constructing services
    constructor(myPhotoData:PhotoDataService,myModalData:ModalService) {
      this.photoData = myPhotoData;
      this.modalData = myModalData;
    }

    // declaring variables to be passed
    public author:string = "";
    public comment:string = "";

    // validates and rejects/submits users comment
    public submitComment():void {
        // defaulting the error to true to avoid errors
        this.authorError = true;
        this.commentError = true;
        // if author name is greater or equal to 1 error set to false
        if (this.author.length >= 1) { this.authorError = false;}
        // if comment is greater or equal to 1 error set to false
        if (this.comment.length >= 1) { this.commentError = false; }

        // if the inputs both pass validation submits the comment to webAPI
        if (!this.authorError && !this.commentError){
            // preparing for reload
            this.photoData.loaded = false;
            // cloasing the modal
            this.modalData.hideModal();
            // sending the data to webAPI via data handling service
            this.photoData.send(this.author,this.comment);
        }
    }
}
