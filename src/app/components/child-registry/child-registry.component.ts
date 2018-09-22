import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticateService} from '../../services/authentication/authenticate.service';
import {NgForm} from '@angular/forms';
import {Treatment} from '../../model/Treatment';
import {Medicine} from '../../model/Medicine';
import {TreatmentInput} from '../../model/TreatmentInput';
import {HttpErrorResponse} from '@angular/common/http';
import {ChildTreatments} from '../../model/ChildTreatments';
import {MedicineInput} from '../../model/MedicineInput';

@Component({
  selector: 'app-child-registry',
  templateUrl: './child-registry.component.html',
  styleUrls: ['./child-registry.component.css']
})
export class ChildRegistryComponent implements OnInit {

  treatmentInputs: TreatmentInput[];
  treatmentsIdCounter: number;

  nameLengthError = '';

  formData = {
    fullName: '',
    username: '',
    age: '',
    gender: '',
    diseases: '',
    ethnicity: '',
  };

  constructor(private router: Router, private authenticateService: AuthenticateService) {
  }

  ngOnInit() {
    this.treatmentInputs = [];
    this.treatmentsIdCounter = 0;
  }

  /**
   * Obtains the submitted form values and sends the request to the backend web service.
   * @param {NgForm} form
   */
  onSubmit(form: NgForm) {
    this.formData.fullName = form.value.name;
    this.formData.username = form.value.username;
    this.formData.age = form.value.age;
    this.formData.gender = form.value.gender;
    this.formData.diseases = form.value.diseases;
    this.formData.ethnicity = form.value.ethnicity;

    const childTreatments = [];

    for (let i = 0; i < this.treatmentInputs.length; i++) {

      const medicines = [];
      medicines.push(new Medicine(form.value['medicineName' + i], form.value['medicineDate' + i], form.value['medicineDuration' + i]));

      const treatment = new Treatment(medicines, form.value['physicalTreatments' + i]);

      childTreatments.push(treatment);

    }

    const childTreatmentsHolder = new ChildTreatments(childTreatments);

    this.authenticateService.registerChild(this.formData.fullName, this.formData.username,
      this.formData.age, this.formData.gender, JSON.stringify(childTreatmentsHolder), this.formData.diseases,
      this.formData.ethnicity).then(() => {
      console.log('se registro exitosamente el menor');

    }, error => {
      const httpError: HttpErrorResponse = (error as HttpErrorResponse);
      if (httpError.status === 401) {


      } else if (httpError.status === 409 && httpError.error === 'LimitOfInvitationsReached') {


      } else if (httpError.status === 409 && httpError.error === 'AlreadyRegisteredUser') {


      }
    });

  }

  onAddTreatment() {
    this.treatmentInputs.push(new TreatmentInput(this.treatmentsIdCounter));
    this.treatmentsIdCounter++;
  }

  validateMedicineDuration(any: any, medicineInput: MedicineInput) {

    if (any.value < 0 || any.value > 365) {
      console.log(any);
      document.getElementById('medicineDuration').classList.add('ng-invalid');
      medicineInput.isDurationInvalid = true;
    } else {
      document.getElementById('medicineDuration').classList.remove('ng-invalid');
      medicineInput.isDurationInvalid = false;
    }
    console.log(medicineInput);
  }

}
