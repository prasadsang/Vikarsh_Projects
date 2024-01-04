import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalServicesService } from '../services/modal/modal-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
type() {
throw new Error('Method not implemented.');
}
  contactForm!: FormGroup;
boolean = false;


  constructor(private formCommunicationService:ModalServicesService,private fb: FormBuilder) { }

  ngOnInit() {
    this.formCommunicationService['openForm$'].subscribe(() => {
      this.openForm();
    });
  }
  createForm(): void {
    this.contactForm = this.fb.group({
    phone_input: ['', [Validators.required, Validators.minLength(10)]],
  });
  }
  openForm() {
    this.isFormOpen = true;
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
  
  isFormOpen = false;

  closeModal(): void {
    this.isFormOpen = false;
  }
}
