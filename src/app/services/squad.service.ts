import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class SquadService {

  constructor(protected httpClient: Http) {
     
  }
  
  getMySquad() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .map(
        res => res.json()
      );
  }
}
