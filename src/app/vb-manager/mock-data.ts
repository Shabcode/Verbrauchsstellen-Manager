// src/app/vb-manager/mock-data.ts

import { VB } from '../models/VB.model';
import { ZP } from '../models/ZP.model';

const zaehlpunkteMuster3a: ZP[] = [
  { id: 100, name: 'Stromzähler OG', bezeichnung: 'Stromzähler OG', sparte: 'Strom', gueltigVonBis: '01/2020 – 12/2030', anlageZuordnung: '01/2020 – 12/2030' },
  { id: 101, name: 'Gas Kessel', bezeichnung: 'Gas Hauptzähler', sparte: 'Gas', gueltigVonBis: '05/2021 – 05/2031', anlageZuordnung: '05/2021 – 05/2031' },
  { id: 102, name: 'Wasser DG', bezeichnung: 'Wasserzähler DG', sparte: 'Wasser', gueltigVonBis: '01/2023 – 12/2033', anlageZuordnung: '01/2023 – 12/2033' },
  { id: 103, name: 'PV-Anlage', bezeichnung: 'PV Einspeisung', sparte: 'Strom', gueltigVonBis: '03/2022 – 03/2032', anlageZuordnung: '03/2022 – 03/2032' },
  { id: 104, name: 'Heizung OG', bezeichnung: 'Heizungszähler OG', sparte: 'Wärme', gueltigVonBis: '09/2023 – 09/2033', anlageZuordnung: '09/2023 – 09/2033' },
];

const zaehlpunkteMuster5: ZP[] = [
  { id: 200, name: 'Stromzähler Keller Strom', bezeichnung: 'Stromzähler Keller Strom', sparte: 'Strom', gueltigVonBis: '12/2022 – 12/2027', anlageZuordnung: '12/2022 – 12/2027' },
];

const zaehlpunkteMuster6: ZP[] = [
  // 10 Zählpunkt-Objekte
  ...zaehlpunkteMuster3a,
  { id: 305, name: 'E-Ladesäule', bezeichnung: 'Wallbox', sparte: 'Strom', gueltigVonBis: '01/2024 – 01/2034', anlageZuordnung: '01/2024 – 01/2034' },
  { id: 306, name: 'Büro links', bezeichnung: 'Unterzähler Büro', sparte: 'Strom', gueltigVonBis: '01/2024 – 01/2034', anlageZuordnung: '01/2024 – 01/2034' },
  { id: 307, name: 'Fahrstuhl', bezeichnung: 'Fahrstuhlzähler', sparte: 'Strom', gueltigVonBis: '01/2024 – 01/2034', anlageZuordnung: '01/2024 – 01/2034' },
  { id: 308, name: 'Lüftung', bezeichnung: 'Lüftungsanlage', sparte: 'Wärme', gueltigVonBis: '01/2024 – 01/2034', anlageZuordnung: '01/2024 – 01/2034' },
  { id: 309, name: 'Garagenlicht', bezeichnung: 'Lichtzähler Garage', sparte: 'Strom', gueltigVonBis: '01/2024 – 01/2034', anlageZuordnung: '01/2024 – 01/2034' },
];

export const MOCK_VERBRAUCHSSTELLEN: VB[] = [
  { 
    VBId: 1, 
    adresse: 'Musterstraße', 
    hausNummer: '3a', 
    plz: '12345', 
    ort: 'Musterstadt', 
    kontaktPerson: '', 
    VBArt: 'Wohnhaus', 
    kennung: 'ert012b', 
    zaehlpunkte: zaehlpunkteMuster3a 
  },
  { 
    VBId: 2, 
    adresse: 'Musterstraße', 
    hausNummer: '5', 
    plz: '12345', 
    ort: 'Musterstadt', 
    kontaktPerson: 'Max Mustermann', 
    VBArt: 'Meine VB-Art', 
    kennung: 'axd123bcd', 
    zaehlpunkte: zaehlpunkteMuster5 
  },
  { 
    VBId: 3, 
    adresse: 'Musterstraße', 
    hausNummer: '6', 
    plz: '12345', 
    ort: 'Musterstadt', 
    kontaktPerson: 'Erika Mustermann', 
    VBArt: 'Gewerbe', 
    kennung: 'ghf789e', 
    zaehlpunkte: zaehlpunkteMuster6 
  },
];