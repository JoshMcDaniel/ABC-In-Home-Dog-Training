import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Services } from '../shared/result.model';

@Component({
  selector: 'app-services-summary',
  templateUrl: './services-summary.component.html',
  styleUrls: ['./services-summary.component.scss']
})
export class ServicesSummaryComponent implements OnInit {

  panelOpenState: boolean = false;
  services: Services[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getServices().subscribe((result: Services[]) => {
      result['services'].forEach((service: Services) => {
        this.services.push(service);
      });
    });
  }

}
