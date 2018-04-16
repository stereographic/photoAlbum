import { Component } from '@angular/core';
import { PhotoDataService } from "../PhotoData.service";

@Component({
    selector: "view-comments",
    templateUrl: "./viewComments.component.html",
})
export class ViewCommentsComponent {
    constructor(public photoData:PhotoDataService) {}
    
}