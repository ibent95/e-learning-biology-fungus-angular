// Core libraries
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeId from "@angular/common/locales/id";

// App configurations
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';

// Shared components
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { SlideShowComponent } from './shared/slide-show/slide-show.component';
import { PriceListComponent } from './shared/price-list/price-list.component';

// Module components
import { HomeComponent } from './modules/home/home.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { AboutComponent } from './modules/about/about.component';
import { SubjectsComponent } from './modules/subjects/subjects.component';
import { CommingSoonPageComponent } from './shared/comming-soon-page/comming-soon-page.component';
import { SendMessageFormComponent } from './shared/send-message-form/send-message-form.component';
import { UnderConstructionPageComponent } from './shared/under-construction-page/under-construction-page.component';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    SubjectsComponent,
    SlideShowComponent,
    PriceListComponent,
    CommingSoonPageComponent,
    SendMessageFormComponent,
    UnderConstructionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id-ID' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'IDR' },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
