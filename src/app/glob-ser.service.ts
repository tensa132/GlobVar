import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  constructor() { }

  private Data : String = "Test Global";

  getData() {
    return this.Data;
  }
  setData(databaru) {
    this.Data = databaru;
  }
}