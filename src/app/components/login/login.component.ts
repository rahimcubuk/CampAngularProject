import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/auth/loginModel';
import { TokenModel } from 'src/app/models/auth/tokenModel';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  tokenData: TokenModel;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      var data: LoginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(data).subscribe(
        (response) => {
          this.toastrService.info(response.message);
          localStorage.setItem('token', response.data.token);
        },
        (response) => {
          //console.log(response);
          this.toastrService.error(
            response.error,
            'Bilgilerinizi kontrol edin.'
          );
        }
      );
    } else {
      console.log('hata');
    }
  }
}
