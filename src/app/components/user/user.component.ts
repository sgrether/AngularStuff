import { Component, OnInit } from '@angular/core';
import { SquadService } from '../../services/squad.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myname: string;
  age: number;
  address: Address;
  hobbies: string[];
  toggle: boolean;
  squad: SquadMember[];
  
  constructor(private mySquadService:SquadService) { 
    
  }

  ngOnInit() {
    this.myname = 'BOIX';
    this.age = 12;
    this.address = {
      street: '420 booty',
      city: 'america',
      state: 'cali'
    };
    this.hobbies = ['bobs', 'vagene'];
    this.toggle = false;
    this.getSquadFromService();
  }

  click() {
    this.myname = "Bitch Boix";
  }
  
  addHobby(hobby: string) {
    this.hobbies.unshift(hobby);
    return false;
  }
  
  deleteHobby(hobby: string) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
  
  toggleEdit() {
    this.toggle = !this.toggle;
  }
  
  getSquadFromService() {
    this.mySquadService.getMySquad()
      .subscribe((results) => {
        this.squad = results,
          console.log(results);
          });
  }

}

interface Address {
   street: string;
   city: string;
   state: string;
}

interface SquadMember {
  id: number;
  name: string;
}
