import { Component, OnInit } from '@angular/core';
import { GenericLookupPanel } from '../lookup';
import { WelcomePopComponent } from '../welcome-pop/welcome-pop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    popup;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModel() {
    alert('test');
     this.popup = new GenericLookupPanel(WelcomePopComponent, null);

//    const modalRef = this.modalService.open(WelcomePopComponent);
//    modalRef.componentInstance.name = 'World';


  }

}
