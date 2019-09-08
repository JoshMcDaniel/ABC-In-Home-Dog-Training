import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const SLIDER_IMAGES_URL = '../assets/data.json';
const SERVICES_URL = '../assets/services.json';

@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) {}

 getSliderImages() {
   return this.http.get(SLIDER_IMAGES_URL).pipe(
    
   );
 }

 getServices() {
  return this.http.get(SERVICES_URL);
}
}