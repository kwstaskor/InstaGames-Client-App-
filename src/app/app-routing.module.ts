import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/HomeComponents/home/home.component';
import { AboutComponent } from './Components/Info DropDown Components/about/about.component';
import { ContactComponent } from './Components/Info DropDown Components/contact/contact.component';
import { MultiplayerComponent } from './Components/multiplayer/multiplayer.component';

import { FAQComponent } from './Components/Shared Components/footer/Footer Components/faq/faq.component';
import { PrivacyPolicyComponent } from './Components/Shared Components/footer/Footer Components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './Components/Shared Components/footer/Footer Components/terms-of-use/terms-of-use.component';
import { UserSettingsComponent } from './Components/Shared Components/navbar/NavbarComponents/user-settings/user-settings.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Multiplayer", component: MultiplayerComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact", component: ContactComponent },
  { path: "FAQ", component: FAQComponent },
  { path: "Terms-of-Use", component: TermsOfUseComponent },
  { path: "Privacy-Policy", component: PrivacyPolicyComponent },
  { path: "UserSettings", component: UserSettingsComponent },
  { path: "", redirectTo: "Home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
