import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { IValidator } from 'src/app/core/interface/iValidator';

@Component({
  selector: 'app-input-numeric',
  templateUrl: './input-numeric.component.html',
  styleUrls: ['./input-numeric.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputNumericComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputNumericComponent
    },
  ]
})
export class InputNumericComponent implements ControlValueAccessor, IValidator{

  @Input() increment: number;
  @Input() label: string;
  @Input() min: number;
  @Input() max: number;

  quantity = 0;
  onChange = (quantity) => 0;
  onTouched = () => {};
  touched = false;
  disabled = false;

  constructor() { }


  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onAdd(){
    if(this.quantity < this.max){
      this.markAsTouched();
      if(!this.disabled){
        this.quantity += this.increment;
        this.onChange(this.quantity)
      }
    }
  }

  onRemove(){
    if(this.quantity > this.min){
      this.markAsTouched();
      if(!this.disabled){
        this.quantity -= this.increment;
        this.onChange(this.quantity);
      }
    }
  }

  markAsTouched(){
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | any | null{
    const quantity = control.value;
    if(quantity <= 0){
      return{
        mustBePositive: {
          quantity: 0
        }
      };
    }
  }
}
