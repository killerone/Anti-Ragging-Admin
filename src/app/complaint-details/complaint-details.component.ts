import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  @Input() complaint;
  keys;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.keys = Object.keys(this.complaint);
  }

}
