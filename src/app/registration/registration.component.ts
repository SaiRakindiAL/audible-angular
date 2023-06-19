import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from './registration-service.service';
import { Customer } from './registration';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  password: string = '';
  confirmPassword: string = '';
  user = { username: '' };
  isUsername!: boolean;
  userNameAvailabilityMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([A-Z][a-z]+){1}( [A-Z][a-z]*)*$/),
        ],
      ],
      emailAddress: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/
          ),
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  passwordMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  register() {
    this.registrationService.save(this.registrationForm.value).subscribe(
      (success) => {
        this.validateUsername();
        this.successMessage = 'You are successfully registered';
        this.router.navigateByUrl('explore');
      },
      (error) => (this.errorMessage = 'Database is not connected')
    );
  }

  validateUsername() {
    this.registrationService
      .validateUsername(this.registrationForm.value)
      .subscribe((response) => {
        console.log('response', response);
        if (response.exists) {
          this.isUsername = false;
          this.userNameAvailabilityMessage = 'Username already exists';
        } else {
          this.isUsername = true;
          this.userNameAvailabilityMessage = 'Username is available';
        }
      });
  }
}
