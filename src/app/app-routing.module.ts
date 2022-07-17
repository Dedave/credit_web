import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsPageComponent } from './pages/loans/details-page/details-page.component';
import { DisbursementComponent } from './pages/loans/disbursement/disbursement.component';
import { LoansComponent } from './pages/loans/loans/loans.component';
import { NotYetContactedComponent } from './pages/recovery/not-yet-contacted/not-yet-contacted.component';
import { OverviewComponent } from './pages/recovery/overview/overview.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'loans', component:LoansComponent},
  {path:'not-yet-contacted', component:NotYetContactedComponent},
  {path:'overview', component:OverviewComponent},
  {path:'side-bar', component:SideBarComponent},
  {path:'details-page', component:DetailsPageComponent},
  {path:'disbursement', component:DisbursementComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
