import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
// import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { ApiService } from './api.service';

imports: [
 CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    SlimLoadingBarModule.forRoot(),
    NgProgressRouterModule,
    NgProgressModule.forRoot({
      spinnerPosition: 'right',
      color: '#f71cff',
      thick: true
    }),
    // NgProgressHttpModule.forRoot(),
    PerfectScrollbarModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxPayPalModule,
    HttpClientModule
  ],
  providers: [ApiService]
