import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PersonComponent } from './person/person.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<PersonComponent> {
  canDeactivate(component: PersonComponent): boolean {
   
    if(component.personForm.dirty){
        if (confirm("Are you sure you want to discard the changes.")) {
            return true;
        } else {
            return false;
        }
    }
    return true;
  }
}