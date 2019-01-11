import { Component, OnInit , Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'name';
  responseData: any;
  
  constructor( public data: ApiService, public  http:  HttpClient,
   private route: ActivatedRoute, private router: Router) {
   
  }
  ngOnInit() {
    this.getContact();
   this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };

  this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
      }
  });
  }
  public getContact() {
    this.data.getXData('getcontacts').then((result) => {
      this.responseData = result;
      if (this.responseData.Status === 'true') {
        this.contact_details = this.responseData.data;
      } else {}
    }, (err) => {
      console.log(err);
    });
  }
}

