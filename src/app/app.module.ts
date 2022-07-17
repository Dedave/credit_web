import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoansComponent } from './pages/loans/loans/loans.component';
import { DetailsPageComponent } from './pages/loans/details-page/details-page.component';
import { DisbursementComponent } from './pages/loans/disbursement/disbursement.component';
import { OverviewComponent } from './pages/recovery/overview/overview.component';
import { NotYetContactedComponent } from './pages/recovery/not-yet-contacted/not-yet-contacted.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoansComponent,
    DetailsPageComponent,
    DisbursementComponent,
    OverviewComponent,
    NotYetContactedComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
