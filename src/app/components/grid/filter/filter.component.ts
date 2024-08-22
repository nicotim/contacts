import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

const MODULE_IMPORTS = [MatInput, MatFormField, MatLabel];

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MODULE_IMPORTS],
  template: `
    <mat-form-field>
      <mat-label>{{ label() }}</mat-label>
      <input
        matInput
        type="text"
        [(ngModel)]="filter"
        [placeholder]="placeholder()"
      />
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Enter a value');
}
