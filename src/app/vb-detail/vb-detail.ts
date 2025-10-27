import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder, FormControl } from '@angular/forms'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { VB } from '../models/VB.model';
import { ZP } from '../models/ZP.model';

interface VBFormGroup {
  adresse : FormControl<string>;
  hausNummer : FormControl<string>;
  plz : FormControl<string>;
  ort : FormControl<string>;
  kontaktPerson : FormControl<string>;
  VBArt : FormControl<string>;
  kennung : FormControl<string>;
}

@Component({
  selector: 'app-vb-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './vb-detail.html',
  styleUrl: './vb-detail.scss'
})
export class VbDetailComponent implements OnChanges {

  private fb = inject(NonNullableFormBuilder);
  
  @Input() vb: VB | null = null;
  
  
  @Output() save = new EventEmitter<VB>();
  @Output() delete = new EventEmitter<number>();

  vbForm: FormGroup<VBFormGroup> = this.fb.group({
    adresse: ['', Validators.required],
    hausNummer: ['', Validators.required],
    plz: ['', Validators.required],
    ort: ['', Validators.required],
    kontaktPerson: [''],
    VBArt: [''],
    kennung: ['']
  });
  
  zaehlpunkteData: ZP[] = [];

  displayedColumns: string[] = ['bezeichnung', 'sparte', 'gueltigVonBis', 'anlageZuordnung', 'actions'];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vb'] && this.vb) {
      this.vbForm.patchValue({
        adresse: this.vb.adresse,
        hausNummer: this.vb.hausNummer,
        plz: this.vb.plz,
        ort: this.vb.ort,
        kontaktPerson: this.vb.kontaktPerson,
        VBArt: this.vb.VBArt,
        kennung: this.vb.kennung
      });
      this.zaehlpunkteData = this.vb.zaehlpunkte;
    } else if (changes['vb'] && !this.vb) {
      this.vbForm.reset();
      this.zaehlpunkteData = [];
    }
  }

  onSave(): void {
    if (this.vbForm.valid && this.vb) {
      const formValue = this.vbForm.getRawValue();
      
      const updatedVb: VB = {
        ...this.vb,
        ...formValue
      };
      this.save.emit(updatedVb);
    }
  }

  onDelete(): void {
    if (this.vb && this.vb.VBId) {
      this.delete.emit(this.vb.VBId);
    }
  }
  
  onNewZaehlpunkt(): void {
    console.log('Neuer Zählpunkt anlegen...');
  }
}