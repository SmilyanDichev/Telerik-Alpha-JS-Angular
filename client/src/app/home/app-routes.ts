import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AdminAplicationsComponent } from './components/admin/admin-aplications/admin-aplications.component';
import { AdminContactsComponent } from './components/admin/admin-contacts/admin-contacts.component';
import { AdminJobsComponent } from './components/admin/admin-jobs/admin-jobs.component';
import { AdminLinksComponent } from './components/admin/admin-links/admin-links.component';
import { AdminUsersComponent } from './components/admin/admin-user/admin-users.component';
import { ContactsComponent } from './components/public/contacts/contacts.component';
import { HomeComponent } from './components/public/home/home.component';
import { JobDetailsComponent } from './components/public/job/job-details/job-details.component';
import { JobListComponent } from './components/public/job/job-list/job-list.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'jobs', component: JobListComponent },
    { path: 'jobs/:id', component: JobDetailsComponent },
    { path: 'contacts', component: ContactsComponent },
    {
        path: 'admin', canActivate: [AdminGuard], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'applications', component: AdminAplicationsComponent },
            { path: 'applications/:id', component: AdminAplicationsComponent },
            { path: 'jobs', component: AdminJobsComponent },
            { path: 'users', component: AdminUsersComponent },
            { path: 'links', component: AdminLinksComponent },
            { path: 'contacts', component: AdminContactsComponent },
        ],
    },
    { path: '**', redirectTo: 'home' },
];
