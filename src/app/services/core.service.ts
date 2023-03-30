import { Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }
}

// Input`s required decorator
export function Required(): Function {

  return (target: any, key: string): void => {
    const NG_ON_INIT = 'ngOnInit';

    // eslint-disable-next-line @typescript-eslint/ban-types
    const original: Function | null = target[NG_ON_INIT];

    target[NG_ON_INIT] = function () {

      if (this[key] === undefined) {
        throw new Error(`Property ${key} is required`);
      }

      if (original) {
        original.apply(this);
      }
    };
  };

}

// Error when invalid control is dirty, touched, or submitted
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}