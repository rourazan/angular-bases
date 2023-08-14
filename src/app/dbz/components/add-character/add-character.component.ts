import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power:0,
    id: uuid()
  }

  emitCharacter(){
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
  }
}
