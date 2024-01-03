import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(49)]],
      Company_name: ['', [Validators.required, Validators.maxLength(49)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(49)]],
      phone_input: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Send the form data to the server or perform other actions
      const formData = this.contactForm.value;
      alert('Form submitted:');

      // Optionally, you can reset the form after submission
      this.contactForm.reset();
    } else {
      // Handle form validation errors
      alert('Form has validation errors');
    }
  }
}






