import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerDataService } from './services/player-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    breakpointObserver: BreakpointObserver,
    private playerData: PlayerDataService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 1100px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  downloadData() {
    let playerData = {
      name: this.playerData.name$.value,
      role: this.playerData.role$.value,
      stats: this.playerData.stats$.value,
      skills: this.playerData.skills$.value,
      meleeWeapons: this.playerData.meleeWeapons$.value,
      rangedWeapons: this.playerData.rangedWeapons$.value,
      ammunition: this.playerData.ammunition$.value,
      armor: this.playerData.armor$.value,
      gear: this.playerData.gear$.value,
      cyberware: this.playerData.cyberware$.value,
      spendMoney: this.playerData.spendMoney$.value,
    };

    var a = document.createElement('a');
    var file = new Blob([JSON.stringify(playerData)], { type: 'text/plain' });
    a.href = URL.createObjectURL(file);
    a.download = `${playerData.name}.json`;
    a.click();
  }
}
