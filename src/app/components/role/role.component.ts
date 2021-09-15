import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getAllRoles } from 'src/app/data/roles';
import { Role } from 'src/app/models/role';
import { PlayerDataService } from 'src/app/services/player-data.service';

@Component({
  selector: 'crcc-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  roles: Role[] = getAllRoles();
  characterName: string = '';

  characterNameFormContol = new FormControl('');
  selectedRoleFormControl!: FormControl;

  selectedRole!: Role;

  constructor(private playerData: PlayerDataService) { }

  ngOnInit(): void {
    this.selectedRole = this.roles[0];
    this.selectedRoleFormControl = new FormControl(this.selectedRole);

    this.characterNameFormContol.valueChanges.subscribe((x) =>
      this.playerData.name$.next(x)
    );

    this.selectedRoleFormControl.valueChanges.subscribe((x) => this.playerData.role$.next(x));

    this.playerData.name$.subscribe((x) => console.log(x));
    this.playerData.role$.subscribe((x) => console.log(x));
  }
}
