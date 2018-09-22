import {Medicine} from './Medicine';

export class Treatment {

  id: number;
  medicines: Medicine[];
  physicalTreatment: string;


  constructor(id: number) {
    this.id = id;
  }

  addMedicine(medicine: Medicine) {
    this.medicines.push(medicine);
  }

}
