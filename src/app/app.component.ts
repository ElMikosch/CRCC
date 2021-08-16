import { Component } from '@angular/core';
import { getAllStats } from "./data/stats";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allStats = getAllStats();
}