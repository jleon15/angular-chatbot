import {Medicine} from './Medicine';

export class Treatment {

  medicines: Medicine[];
  physicalTreatment: string;


  constructor(medicines: Medicine[], physicalTreatment: string) {
    this.medicines = medicines;
    this.physicalTreatment = physicalTreatment;
  }

  addMedicine(medicine: Medicine) {
    this.medicines.push(medicine);
  }

}
