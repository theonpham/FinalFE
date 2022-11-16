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
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodFilterComponent } from './food/food-filter/food-filter.component';
import { FoodInputComponent } from './food/food-input/food-input.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { TableDetailComponent } from './table/table-detail/table-detail.component';
import { TableFilterComponent } from './table/table-filter/table-filter.component';
import { TableInputComponent } from './table/table-input/table-input.component';
import { TableListComponent } from './table/table-list/table-list.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffDetailComponent } from './staff/staff-detail/staff-detail.component';
import { StaffFilterComponent } from './staff/staff-filter/staff-filter.component';
import { StaffInputComponent } from './staff/staff-input/staff-input.component';
import { FormsModule } from '@angular/forms';
import { BillDetailComponent } from './bill/bill-detail/bill-detail.component';
import { BillFilterComponent } from './bill/bill-filter/bill-filter.component';
import { BillInputComponent } from './bill/bill-input/bill-input.component';
import { BillListComponent } from './bill/bill-list/bill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    StaffComponent,
    BillComponent,
    FoodComponent,
    ClientComponent,
    FoodTypeComponent,
    FoodListComponent,
    FoodFilterComponent,
    FoodInputComponent,
    FoodDetailComponent,
    TableDetailComponent,
    TableFilterComponent,
    TableInputComponent,
    TableListComponent,
    StaffListComponent,
    StaffDetailComponent,
    StaffFilterComponent,
    StaffInputComponent,
    BillDetailComponent,
    BillFilterComponent,
    BillInputComponent,
    BillListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
