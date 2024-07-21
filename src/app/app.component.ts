import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webview-example';
  latitude: number = 0;
  longitude: number = 0;

  ngOnInit() {
    // Registrar la función `updateLocation` en el objeto global `window`
    (window as any).updateLocation = this.updateLocation.bind(this);
    this.getLocationFromAndroid();
  }

  getLocationFromAndroid() {
    if ((window as any).Android) {
      const location = (window as any).Android.getLocation();
      if (location) {
        const [latitude, longitude] = location.split(',');
        this.updateLocation(parseFloat(latitude), parseFloat(longitude));
      }
    } else {
      console.log('Android interface not available');
    }
  }

  updateLocation(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
}
