import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AgmCoreModule} from '@agm/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './componets/navbar/navbar.component';
import {LoginComponent} from './componets/login/login.component';
import {RegisterComponent} from './componets/register/register.component';
import {HomeComponent} from './componets/home/home.component';
import {DashboardComponent} from './componets/dashboard/dashboard.component';
import {ProfileComponent} from './componets/profile/profile.component';
import {CaregiverlistComponent} from './componets/caregiverlist/caregiverlist.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {PatientlistService} from './services/patientlist.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ModalService} from './services/modal.service'
import {DatatransferService} from './services/datatransfer.service';
import {AuthGuard} from './guards/auth.guard';
import {FooterComponent} from './componets/footer/footer.component';
import {ClinicComponent} from './componets/clinic/clinic.component';
import {PatientListComponent} from './componets/patient-list/patient-list.component';
import {OrderlistComponent} from './componets/orderlist/orderlist.component';
import {OrderlistService} from './services/orderlist.service';
import {ProfileService} from './services/profile.service';
import {CaregiverlistService} from './services/caregiverlist.service';
import {AddcaregiverComponent} from './componets/addcaregiver/addcaregiver.component';
import {DialogComponent} from './componets/dialog/dialog.component';
import {ModalComponent} from './componets/modal/modal.component';
import {AssessmentorderComponent} from './componets/assessmentorder/assessmentorder.component';
import {AssignperawatComponent} from './componets/assignperawat/assignperawat.component';
import {AssignscheduleComponent} from './componets/assignschedule/assignschedule.component';
import {ChangeorderstatusComponent} from './componets/changeorderstatus/changeorderstatus.component';
import {OrdermapComponent} from './componets/ordermap/ordermap.component';
import {PushNotificationsModule} from 'ng-push';
import {OrderdetailsComponent} from './componets/orderdetails/orderdetails.component';
import {UserlistComponent} from './componets/userlist/userlist.component';
import {CaregiverdetailsComponent} from './componets/caregiverdetails/caregiverdetails.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'clinic', component: ClinicComponent, canActivate: [AuthGuard]},
  {path: 'patients', component: PatientListComponent, canActivate: [AuthGuard]},
  {path: 'orderlist', component: OrderlistComponent, canActivate: [AuthGuard]},
  {path: 'caregiverlist', component: CaregiverlistComponent, canActivate: [AuthGuard]},
  {path: 'addcaregiver', component: AddcaregiverComponent, canActivate: [AuthGuard]},
  {path: 'assessmentorder', component: AssessmentorderComponent, canActivate: [AuthGuard]},
  {path: 'assigncaregiver', component: AssignperawatComponent, canActivate: [AuthGuard]},
  {path: 'assignschedule', component: AssignscheduleComponent, canActivate: [AuthGuard]},
  {path: 'orderstatus', component: ChangeorderstatusComponent, canActivate: [AuthGuard]},
  {path: 'ordermap', component: OrdermapComponent, canActivate: [AuthGuard]},
  {path: 'orderdetails', component: OrderdetailsComponent, canActivate: [AuthGuard]},
  {path: 'userlist', component: UserlistComponent, canActivate: [AuthGuard]},
  {path: 'caregiverdetails', component: CaregiverdetailsComponent, canActive: [AuthGuard]}
];

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey: 'AIzaSyAu1wjM9EJ2Ld_IVSROrsS5K9xG_WIs1yA',
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    ClinicComponent,
    PatientListComponent,
    OrderlistComponent,
    CaregiverlistComponent,
    AddcaregiverComponent,
    DialogComponent,
    ModalComponent,
    AssessmentorderComponent,
    AssignperawatComponent,
    AssignscheduleComponent,
    ChangeorderstatusComponent,
    OrdermapComponent,
    OrderdetailsComponent,
    UserlistComponent,
    CaregiverdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    PushNotificationsModule,
    googleMapsCore
  ],
  providers: [
    ValidateService,
    AuthService,
    PatientlistService,
    OrderlistService,
    AuthGuard,
    ProfileService,
    CaregiverlistService,
    ModalService,
    DatatransferService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
