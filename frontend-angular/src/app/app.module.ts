import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersJobsListComponent } from './components/users-jobs-list/users-jobs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    JobDetailsComponent,
    JobsListComponent,
    AddUserComponent,
    UserDetailsComponent,
    UsersListComponent,
    UsersJobsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
