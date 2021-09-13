import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/Shared Components/navbar/navbar.component';
import { FooterComponent } from './Components/Shared Components/footer/footer.component';
import { AboutComponent } from './Components/Info DropDown Components/about/about.component';
import { ContactComponent } from './Components/Info DropDown Components/contact/contact.component';
import { TermsOfUseComponent } from './Components/Shared Components/footer/Footer Components/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './Components/Shared Components/footer/Footer Components/privacy-policy/privacy-policy.component';
import { FAQComponent } from './Components/Shared Components/footer/Footer Components/faq/faq.component';
import { BreadcrumbComponent } from './Components/Shared Components/breadcrumb/breadcrumb.component';
import { InputFieldComponent } from './Components/Shared Components/input-field/input-field.component';
import { InputNumberComponent } from './Components/Shared Components/input-number/input-number.component';
import { InputTextAreaComponent } from './Components/Shared Components/input-text-area/input-text-area.component';
import { HomeComponent } from './Components/HomeComponents/home/home.component';
import { UserSettingsComponent } from './Components/Shared Components/navbar/NavbarComponents/user-settings/user-settings.component';
import { MultiplayerComponent } from './Components/multiplayer/multiplayer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    FAQComponent,
    BreadcrumbComponent,
    InputFieldComponent,
    InputNumberComponent,
    InputTextAreaComponent,
    HomeComponent,
    UserSettingsComponent,
    MultiplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }