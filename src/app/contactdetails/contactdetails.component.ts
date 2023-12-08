import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  msginfo: Contact[];

  // p:number;
  constructor(private conServ:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.showAllMsgInfo();
  }

  showAllMsgInfo()
  {
    this.conServ.getmessages().subscribe(data=>{
      console.log(data);  
      this.msginfo = data;
    });
  }
}
