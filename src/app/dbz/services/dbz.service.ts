import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
      id: uuid()
    },
    {
      name: 'Goku',
      power: 9500,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 7500,
      id: uuid()
    },
  ];

  onNewCharacter(character:Character):void{
    character.id = uuid();
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }

  deleteCharacterByid(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
