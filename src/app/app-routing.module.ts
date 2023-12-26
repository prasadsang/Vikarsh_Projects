import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { VikarshComponent } from './vikarsh/vikarsh.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AwardsComponent } from './awards/awards.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { NanoCrystallineComponent } from './nano-crystalline/nano-crystalline.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrgocoldSteelComponent } from './crgocold-steel/crgocold-steel.component';
import { ClientComponent } from './client/client.component';
import { MaterialPropertiesComponent } from './material-properties/material-properties.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'vikarsh', redirectTo: 'vikarsh', pathMatch: 'full' },
  { path: '', component: VikarshComponent },
  { path: 'Nanocrystalline', component: NanoCrystallineComponent },
  { path: 'Electricalsteel', component: CrgocoldSteelComponent },
  {
    path: 'about-Us',
    component: AboutUsComponent,
  },
  { path: 'contact us', component: ContactUsComponent },
  { path: 'awads', component: AwardsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-Us', component: ContactComponent },
  { path: 'metrialproper', component: MaterialPropertiesComponent },
  { path: 'Client', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
