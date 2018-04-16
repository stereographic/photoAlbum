import { Injectable, Inject } from "@angular/core";

@Injectable()   
export class ModalService {

    public showAddComment:boolean = false;


    public showModal():void {
        this.showAddComment = true;
    }
    
    public hideModal():void {
        this.showAddComment = false;
    }

}
