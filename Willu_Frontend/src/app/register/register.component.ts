import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'organizationName': new FormControl(null),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      'confirmPassword': new FormControl(null, [Validators.required])
    });
    this.registerForm.controls['organizationName'].disable();
    this.orgForm = new FormGroup({
      'orgCode': new FormControl(null, [Validators.required]),
    });
  }
  registerForm!: FormGroup;
  orgForm!: FormGroup;
  isOrgCodeValid: boolean = true;
  showOrgCode: boolean = true;
  showRegister: boolean = false;

  onRegister(){

  }
}
