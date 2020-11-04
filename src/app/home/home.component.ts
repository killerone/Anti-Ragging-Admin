import { AngularFireDatabase } from '@angular/fire/database';
import { ComplaintDetailsComponent } from './../complaint-details/complaint-details.component';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // complaints = [{
  //   complaintBy: "Himanshu",
  //   type: "Ragging",
  //   college: "SPIT",
  //   branch: "MCA",
  //   date: new Date()
  // },
  // {
  //   complaintBy: "Akash",
  //   type: "Bullying",
  //   college: "SPIT",
  //   branch: "IT",
  //   date: new Date()
  // }]
  complaints;
  constructor(private afAuth: AngularFireAuth, private modalService: NgbModal, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.db.list("data").valueChanges().subscribe(data => {
      data.sort((a, b) =>{
        return new Date(b.cdate) - new Date(a.cdate);
      })
      this.complaints = data;
    })
  }


  logout() {
    this.afAuth.signOut().then(a => {
    });
  }

  open(complaint) {
    const modalRef = this.modalService.open(ComplaintDetailsComponent, { centered: true });
    modalRef.componentInstance.complaint = complaint;
  }

}
