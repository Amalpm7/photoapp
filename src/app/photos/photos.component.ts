import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private myapi:ServiceService) { 
    this.putPhoto()
  }
  putPhoto=()=>{
    this.myapi.getPhoto().subscribe(
      (data)=>{
        this.photoData=data
      }
    )
  }
  photoData:any=[ ]

  ngOnInit(): void {
  }

}
