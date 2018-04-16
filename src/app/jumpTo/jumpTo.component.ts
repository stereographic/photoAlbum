import { Component } from '@angular/core';
import { PhotoDataService } from "../PhotoData.service";

@Component({
    selector: "jump-to",
    templateUrl: "./jumpTo.component.html",
})
export class JumpToComponent {
    constructor(public photoData:PhotoDataService) {}

    // variable for toggling the jumpTo panel
    public showPanel:boolean = false;

    // moving to clicked image
    public jumpTo(image):void {
        this.photoData.selectedIndex = this.photoData.photos.indexOf(image);
        this.photoData.currentIndex = this.photoData.photos.indexOf(image);
    }
    // toggles the jumpTo panel
    public jumpToggle():void {
        this.showPanel = !this.showPanel;
    }
}