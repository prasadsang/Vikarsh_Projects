import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalServicesService } from '../services/modal/modal-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {



  contactForm!: FormGroup;
boolean = false;

yourForm: FormGroup;
  activeModal: any;
phoneNumber: any=[''];

  constructor(private formCommunicationService:ModalServicesService,private fb: FormBuilder) { 
    this.yourForm = this.fb.group({
      phoneNumber: ['', [Validators.required]],
    });
  }

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


  
  isFormOpen = false;

  closeModal(): void {
    this.isFormOpen = false;

  }

  submitForm(form: NgForm) {
    
alert("Data Submited")
 
    }

  
}
