import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticateService} from '../../services/authentication/authenticate.service';
import {NgForm} from '@angular/forms';
import {Treatment} from '../../model/Treatment';

@Component({
  selector: 'app-child-registry',
  templateUrl: './child-registry.component.html',
  styleUrls: ['./child-registry.component.css']
})
export class ChildRegistryComponent implements OnInit {

  treatments: Treatment[];

  formData = {
    fullName: '',
    username: '',
    age: '',
    gender: '',
    treatments: '',
    diseases: '',
    ethnicity: ''
  };

  constructor(private router: Router, private authenticateService: AuthenticateService) {
  }

  ngOnInit() {
    this.treatments = [];
  }

  /**
   * Obtains the submitted form values and sends the request to the backend web service.
   * @param {NgForm} form
   */
  onSubmit(form: NgForm) {

  }

}
