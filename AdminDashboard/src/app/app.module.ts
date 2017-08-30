import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from './CapitalizePipe';

import {Http, HttpModule} from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MycustomeDirective } from './CustomDirective';
import { Search } from './filterPipe';
import { ChildComponent } from './child/child.component';
import { CalciComponent } from './calci/calci.component'
import { CalculationService} from './calculation.service';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService} from './countries.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MycustomeDirective,
    CapitalizePipe,
    Search,
    ChildComponent,
    CalciComponent,
    CountriesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [CalculationService,CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
