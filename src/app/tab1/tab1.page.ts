import { Component, AfterContentInit, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterContentInit {
  map;
 @ViewChild('mapElement', {static: true}) mapElement: ElementRef;
 //@ViewChild(‘Map’, {static: true}) mapElement: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
    /*const position = new google.maps.LatLng(-21.763409, -43.349034);

    const mapOptions = {
      zoom: 18,
      center: position,
      setMyLocationButtonEnabled: true,
      disableDefaultUI: false
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      animation: google.maps.Animation.DROP
    });*/
  }
 

  ngAfterContentInit(): void {
    
  }

}
