import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VB } from '../models/VB.model';
import { VbListComponent } from '../vb-list/vb-list';
import { VbDetailComponent } from '../vb-detail/vb-detail';

import { MOCK_VERBRAUCHSSTELLEN } from './mock-data';

@Component({
  selector: 'app-vb-manager',
  standalone: true,
  imports: [
    CommonModule,
    VbListComponent,
    VbDetailComponent
  ],
  templateUrl: './vb-manager.html',
  styleUrl: './vb-manager.scss'
})
export class VbManagerComponent implements OnInit {


  alleVerbrauchsstellen = signal<VB[]>([]);

  aktuelleVB = signal <VB | null>(null);

  selectedVbId = computed(() => this.aktuelleVB()?.VBId || null);

  ngOnInit(): void {
    this.alleVerbrauchsstellen.set(MOCK_VERBRAUCHSSTELLEN);

    const initialVb = MOCK_VERBRAUCHSSTELLEN.find(vb => vb.VBId === 2) || null;
    this.aktuelleVB.set(initialVb);
  }


  onVerbrauchsstelleAusgewaehlt(vb: VB): void {
    this.aktuelleVB.set(vb);
  }


  onNeueVerbrauchsstelle(): void {
    const newEmptyVb: VB = {
      VBId: Date.now(),
      adresse: '',
      hausNummer: '',
      plz: '',
      ort: '',
      kontaktPerson: '',
      VBArt: '',
      kennung: '',
      zaehlpunkte: []
    } as VB;
    this.aktuelleVB.set(newEmptyVb);
  }


  onSaveVerbrauchsstelle(vbToSave: VB): void {
    this.alleVerbrauchsstellen.update(vbs => {
      const index = vbs.findIndex(vb => vb.VBId === vbToSave.VBId);

      if (index !== -1) {
        vbs[index] = vbToSave;
        console.log('Verbrauchsstelle aktualisiert:', vbToSave);
      } else {
        const newId = Math.max(...vbs.map(v => v.VBId), 0) + 1;
        const newVb = { ...vbToSave, VBId: newId };
        vbs.push(newVb);
        
        this.aktuelleVB.set(newVb); 
        console.log('Neue Verbrauchsstelle angelegt:', newVb);
      }
      return [...vbs]; 
    });
  }


  onDeleteVerbrauchsstelle(vbId: number): void {
    if (confirm('Sind Sie sicher, dass Sie diese Verbrauchsstelle löschen möchten?')) {
      this.alleVerbrauchsstellen.update(vbs => vbs.filter(vb => vb.VBId !== vbId));

      this.aktuelleVB.set(null);
      console.log(`Verbrauchsstelle mit ID ${vbId} gelöscht.`);
    }
  }
}