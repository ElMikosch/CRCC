import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  public stats$ = new BehaviorSubject<Stat[]>([]);

  constructor() { }
}
