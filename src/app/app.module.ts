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
import { AsyncPipe, DatePipe } from '@angular/common';
import { TodayBillPieChartComponent } from './dashboard/today-bill-pie-chart/today-bill-pie-chart.component';
import { BillLineChartComponent } from './dashboard/bill-line-chart/bill-line-chart.component';
import { TopTableComponent } from './dashboard/top-table/top-table.component';
import { TopFoodComponent } from './dashboard/top-food/top-food.component';
import { FoodSupplyComponent } from './dashboard/food-supply/food-supply.component';
import { NgChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './firebase/messaging.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackFilterComponent } from './feedback/feedback-filter/feedback-filter.component';
import { FeedbackPieChartComponent } from './dashboard/feedback-pie-chart/feedback-pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    StaffComponent,
    BillComponent,
    FoodComponent,
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
    TodayBillPieChartComponent,
    BillLineChartComponent,
    TopTableComponent,
    TopFoodComponent,
    FoodSupplyComponent,
    FeedbackComponent,
    FeedbackListComponent,
    FeedbackFilterComponent,
    FeedbackPieChartComponent,
  ],

  imports: [
    NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [MessagingService, DatePipe, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
