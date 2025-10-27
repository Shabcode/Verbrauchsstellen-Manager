import { ZP } from "./ZP.model";

export interface VB {
  adresse : string;
  hausNummer : string;
  plz : string;
  ort : string;
  kontaktPerson : string;
  VBArt : string;
  kennung : string;
  VBId : number;
  zaehlpunkte : ZP[];
}