import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  {
  contactForm!: FormGroup<any>;


  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(49)]],
      Company_name: ['', [Validators.required, Validators.maxLength(49)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(49)]],
      phone_input: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.contactForm.value);
    } else {
      // Mark all controls as touched to display validation messages
      this.markFormGroupTouched(this.contactForm);
    }
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
    

}



