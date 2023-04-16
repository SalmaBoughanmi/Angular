import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  saveUserID(employe_id: number) {
    localStorage.setItem('employeeID', employe_id.toString());
  }

  getUserID(): number {
    const employeeIDString = localStorage.getItem('employeeID');
    return Number(employeeIDString);
  }
}

