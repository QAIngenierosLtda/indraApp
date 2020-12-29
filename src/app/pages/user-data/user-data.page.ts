import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { DatabaseService, User } from './../../services/database.service';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {

  userData = {};
  documentType = ['CC', 'CE', 'Pasaporte'];
  usersT:  User[] = [];

  constructor(private toast: ToastController, private router: Router, private db: DatabaseService, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getUsers().subscribe(usuarios => {
          this.usersT = usuarios;
          console.log(this.usersT);
        });
      }
    });
  }
 
  datasForm = this.formBuilder.group({
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    documento: ['', [Validators.required]],
    numeroDoc: ['', [Validators.required]]
  });

  sendUser(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.userData
      }
    };
    this.router.navigate(['tratamiento-datos'], navigationExtras);
    this.userData = {};
  }
}