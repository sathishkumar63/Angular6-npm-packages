import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subject} from 'rxjs';
import swal from 'sweetalert2';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: any;
  basePath: any;
  responseData: any;
  swalType: any;
  swalTitle: any;
  swalbackground: any;
  constructor(public  http:  HttpClient,
   public route: ActivatedRoute, public router: Router,
   public slimLoadingBarService: SlimLoadingBarService) {
    this.basePath = 'http://localhost:8080/';
   this.apiUrl = this.basePath + 'api/app/';
   }
   
   public showMessage(results) {
    console.log(results);
    this.responseData = results;
    if (this.responseData.Status === 'true') {
      this.swalType = 'success';
      this.swalTitle = 'Success!';
      this.swalbackground = '#f7fff9';
    } else {
      this.swalType = 'error';
      this.swalTitle = 'Failure!';
      this.swalbackground = '#fff2f3';
    }
    swal({
      title: this.swalTitle,
      type: this.swalType,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 10000,
      background: this.swalbackground,
      html: this.responseData.Message,
      showCloseButton: true,
      allowEscapeKey: true
  });
  }
   
   getXData(path) {
    this.slimLoadingBarService.start();
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json', 'cache-control': 'no-cache'
      });
      this.http.get(this.apiUrl + path, {headers: headers})
      .subscribe(res => {
        resolve(res);
        this.slimLoadingBarService.complete();
      }, (err) => {
        if (err.status === 401) {
          this.router.navigate(['/home']);
          }
        this.slimLoadingBarService.reset();
        reject(err);
      });
    });
  }
  getDataX(path) {
    this.slimLoadingBarService.start();
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders(
        { 'Content-Type': 'application/json', 'cache-control': 'no-cache' }
      );
      this.http.get(this.apiUrl + path, { headers: headers })
        .subscribe(res => {
          resolve(res);
          this.slimLoadingBarService.complete();
        }, (err) => {
          // this.errorResponse(err);
          if (err.status === 401) {
            this.router.navigate(['/home']);
            }
          this.slimLoadingBarService.reset();
          reject(err);
        });
    });
  }
  deleteDataX(path) {
    this.slimLoadingBarService.start();
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders(
        { 'Content-Type': 'application/json', 'cache-control': 'no-cache' }
      );
      this.http.delete(this.apiUrl + path, { headers: headers })
        .subscribe(res => {
          resolve(res);
          this.slimLoadingBarService.complete();
        }, (err) => {
          // this.errorResponse(err);
          if (err.status === 401) {
          this.router.navigate(['/home']);
            }
          reject(err);
          this.slimLoadingBarService.reset();
        });

    });
  }
  postDataX(credentials, type) {
    this.slimLoadingBarService.start();
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders(
        { 'Content-Type': 'application/json', 'cache-control': 'no-cache' }
      );
      this.http.post(this.apiUrl + type, credentials, { headers: headers })
        .subscribe(res => {
          resolve(res);
          this.slimLoadingBarService.complete();
        }, (err) => {
          if (err.status === 401) {
             this.router.navigate(['/home']);
            }
          reject(err);
          this.slimLoadingBarService.reset();
        });

    });
  }
 
  putDataX(credentials, type) {
    this.slimLoadingBarService.start();
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders(
        { 'Content-Type': 'application/json', 'cache-control': 'no-cache' }
      );
      this.http.put(this.apiUrl + type, credentials, { headers: headers })
        .subscribe(res => {
          resolve(res);
          this.slimLoadingBarService.complete();
        }, (err) => {
          if (err.status === 401) {
            this.router.navigate(['/home']);
            }
          reject(err);
          this.slimLoadingBarService.reset();
        });

    });
  }
  postData(credentials, type) {
    this.slimLoadingBarService.start();
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders(
        { 'Content-Type': 'application/json', 'cache-control': 'no-cache'}
      );
      this.http.post(this.apiUrl + type, credentials, { headers: headers })
        .subscribe(res => {
          resolve(res);
          this.slimLoadingBarService.complete();
        }, (err) => {
          if (err.status === 401) {
            this.router.navigate(['/home']);
            }
          reject(err);
          this.slimLoadingBarService.reset();
        });

    });
  }
   
}
