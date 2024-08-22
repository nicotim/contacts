import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>

      <a mat-button routerLink="/contacts">
        <mat-icon>list_alt</mat-icon>
        <span>List</span>
      </a>

      <span class="spacer"></span>
      <a mat-button (click)="emitClick()">
        <mat-icon>add_box</mat-icon>
        <span>New</span>
      </a>
    </mat-toolbar>
  `,
  styles: ``,
})
export class ToolbarComponent {
  onNewContactEvenet = output<void>();

  emitClick(): void {
    this.onNewContactEvenet.emit();
  }
}
