import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lesson } from '../../classes/Lesson';

declare var google;

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})
export class PracticePage {

  @ViewChild('map') mapElement: ElementRef; // This is the way we access #map
  map: any;

  lesson: Lesson;
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.lesson = new Lesson(
      "Principles & Techniques of Nitrous Oxide & Oral Sedation",
      ["AGD | Ontario", "On-location"],
      new Date("April 5, 2018 08:30:00"),
      ["Basic Sciences", "Anaesthesia and Pain Management", "Special Patient Care"],
      0,
      50,
        ["Definitions of minimal and moderate sedation and RCDSO guidelines", "Anatomy and physiology as applied to the delivery of sedation"]
     );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.9490, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.mapTypeId.ROADMAP,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }



}
