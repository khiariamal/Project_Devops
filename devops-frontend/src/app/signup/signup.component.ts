import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  user: User = { username: '', email: '', password: '' };
  confirmPassword: string = '';

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private userService: UserService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(signupForm: NgForm) {
    if (signupForm.invalid) { return; }
    if (this.user.password !== this.confirmPassword) { return; }

    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        alert('User registered successfully!');
        console.log('User saved:', res);

        signupForm.resetForm();
        this.confirmPassword = '';
        this.showPassword = false;
        this.showConfirmPassword = false;
      },
      error: (err) => {
        alert('Registration failed!');
        console.error(err);
      }
    });
  }
}
