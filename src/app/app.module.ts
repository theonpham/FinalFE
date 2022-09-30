import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { StaffComponent } from './staff/staff.component';
import { BillComponent } from './bill/bill.component';
import { FoodComponent } from './food/food.component';
import { ClientComponent } from './client/client.component';
import { FoodTypeComponent } from './food-type/food-type.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, TableComponent, StaffComponent, BillComponent, FoodComponent, ClientComponent, FoodTypeComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
