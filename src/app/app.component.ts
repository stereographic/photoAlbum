import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { PhotoDataService } from "./PhotoData.service";
import { ModalService } from "./Modal.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers:[PhotoDataService]
  providers:[PhotoDataService,ModalService]
})
export class AppComponent implements OnInit{

  // declaring services
  public photoData:PhotoDataService;
  public modalData:ModalService;

  constructor(myPhotoData:PhotoDataService,myModalData:ModalService) {
    this.photoData = myPhotoData;
    this.modalData = myModalData;
  }
  
  public ngOnInit():void {
    console.log("Initializing Load");
    // send out AJAX request
    this.photoData.load();
  }
  // ------------------------------------------------- image navigation
  public previous():void {
    this.photoData.selectedIndex = (this.photoData.currentIndex -= 1);
  }

  public next():void {
    this.photoData.selectedIndex = (this.photoData.currentIndex += 1);
  }


  // handling next and previous if at start/end of images
  public isValid(source):boolean{
    if (source == "previous") {
      if (this.photoData.currentIndex == 0) {
        return true;
      } else {
        return false;
      }
    } 
    if (source == "next") {
      if (this.photoData.currentIndex == this.photoData.photos.length - 1) {
        return true;
      } else {
        return false;
      }
    }

  }

}
