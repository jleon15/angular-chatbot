import {MedicineInput} from './MedicineInput';

export class TreatmentInput {

  id: number;
  medicineInputs: MedicineInput[];

  constructor(id: number) {
    this.id = id;
    this.medicineInputs = [];
  }

  addMedicineInput() {
    this.medicineInputs.push(new MedicineInput(this.medicineInputs.length));
  }

}
