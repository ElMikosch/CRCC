import { Component, OnInit } from '@angular/core';
import { getAllRoles } from 'src/app/data/roles';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'crcc-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles: Role[] = getAllRoles();
  characterName: string = "";

  selectedRole!: Role;

  constructor() { }

  ngOnInit(): void {
    this.selectedRole = this.roles[0];
  }

}
