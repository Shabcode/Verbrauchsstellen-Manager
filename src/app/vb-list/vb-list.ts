import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { VB } from '../models/VB.model'; 

@Component({
  selector: 'app-vb-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './vb-list.html',
  styleUrl: './vb-list.scss'
})
export class VbListComponent {
  @Input() verbrauchsstellen: VB[] = [];
  
  @Input() selectedVbId: number | null = null;

  @Output() vbSelected = new EventEmitter<VB>();

  @Output() createNew = new EventEmitter<void>();

  /**
   * Wird aufgerufen, wenn ein Listen-Eintrag geklickt wird.
   * Gibt die ausgewählte Verbrauchsstelle an die Parent-Komponente weiter.
   */
  onVbClick(vb: VB): void {
    this.vbSelected.emit(vb);
  }

  /**
   * Wird aufgerufen, wenn der "Neu"-Button geklickt wird.
   */
  onCreateClick(): void {
    this.createNew.emit();
  }
}