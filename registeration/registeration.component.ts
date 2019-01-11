import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
mobnumPattern = /^[0-9]+(.[0-9]{0,2})?$/;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  responseData: any;
  emailError: boolean;
  mobileError: boolean;
  newUser: any = {'newUserId': '', 'newUserName': '', 'newUserEmail': '', 'newUserMobile': '', 'newUserPassword': ''};
  constructor() { }

  ngOnInit() {
  }
public emailchange(newValue) {
    if (newValue.match(this.emailPattern)) {
      this.emailError = false;
    } else {
    this.emailError = true;
    }
  }
  public mobilechange(value) {
    if (value.match(this.mobnumPattern)) {
      this.mobileError = false;
    } else {
    this.mobileError = true;
    }
  }
  public onFileChanged(event) {
    this.selectedFile = <File>event.target.files;
    this.filelength = event.target.files.length;
    if (this.selectedFile != null) {
      this.btndisabled = false;
      console.log(event);
      console.log(this.selectedFile);
      console.log(this.filelength);
    } else {
      this.btndisabled = true;
    }
  }
  public onUpload() {
   
    const uploadData = new FormData(); // Currently empty
    for (let i = 0; i < this.filelength; i++) {
      uploadData.append('myFile' + i, this.selectedFile[i], this.selectedFile[i].name);
    }
    uploadData.append('imagelength', this.filelength);
    this.data.postFileX(uploadData, 'logoupload').then((result) => {
      this.responseData = result;
   if (this.responseData.Status === 'true') {
    this.selectedFile = null;
    this.btndisabled = true;
    this.getlogo();
   } else {this.btndisabled = false; }
    }, (err) => {
      console.log(err);
    });
  }
  public postnewUser(regsiterForm: NgForm) {
  
    this.data.postDataX(this.newUser, 'newUser').then((result) => {
      this.responseData = result;
     regsiterForm.reset();
      if (this.responseData.Status === 'true') {
        this.newUser = {'newUserId': '', 'newUserName': '', 'newUserEmail': '', 'newUserMobile': '', 'newUserPassword': ''};
      } else {}
    }, (err) => {
     console.log(err);
    });
  }
}
