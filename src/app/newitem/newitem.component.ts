import { Component ,OnInit} from '@angular/core';
import { ItemService } from '../item-service.service';

import { Router } from '@angular/router';
import { ItemModel } from '../item.model';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {

  constructor(private itemServ:ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  item:ItemModel =new ItemModel() ;
  msg:string = "";
  
  addNewItem(frm:any)
  {
      if(frm.valid)
      {
      this.itemServ.addItem(this.item).subscribe(data=>{
        console.log(data);
        //alert("New Employee is Added Successfully...");
        this.router.navigate(['view-all']);
      });
    }
    else
      this.msg = "Invalid Form";
  }

}
