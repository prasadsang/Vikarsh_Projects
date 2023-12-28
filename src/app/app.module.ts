import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContactComponent } from './contact/contact.component';
import { VikarshComponent } from './vikarsh/vikarsh.component';

import { CardComponent } from './card/card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { AwardsComponent } from './awards/awards.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { RedmoreComponent } from './redmore/redmore.component';
import { NanoCrystallineComponent } from './nano-crystalline/nano-crystalline.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrgocoldSteelComponent } from './crgocold-steel/crgocold-steel.component';
import { MaterialPropertiesComponent } from './material-properties/material-properties.component';
import { RAWMATERIALComponent } from './raw-material/raw-material.component';
import { ClientComponent } from './client/client.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import for Angular animations


// Step 1: Add the following line...
import { register } from 'swiper/element/bundle';
import { OwlModule } from 'ngx-owl-carousel';

// Step 2: Add the following line...
register();
@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    ContactComponent,
    VikarshComponent,
    CardComponent,
    AboutUsComponent,
    FooterComponent,
    AwardsComponent,
    CertificatesComponent,
    RedmoreComponent,
    NanoCrystallineComponent,
    GalleryComponent,
    CrgocoldSteelComponent,
   
    MaterialPropertiesComponent,
    RAWMATERIALComponent,
    ClientComponent,
    ContactUsComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BsDropdownModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
