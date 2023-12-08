import { Component , OnInit } from '@angular/core';
import { ItemService } from '../item-service.service';
import { ItemModel } from '../item.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-all-items',
  templateUrl: './view-all-items.component.html',
  styleUrls: ['./view-all-items.component.css']
})
export class ViewAllItemsComponent implements OnInit {

  iteminfo!: ItemModel[];

  //p:number;
  constructor(private itemServ:ItemService, private router:Router) { }

  ngOnInit(): void {
    this.showAllItemInfo();
  }

  showAllItemInfo()
  {
    this.itemServ.getAllItems().subscribe(data=>{
      console.log(data);  
      this.iteminfo = data;
    });
  }

  // getOneItemDetails(id:number)
  // {
  //   this.router.navigate(['oneitem', id]);
  // }

  DeleteItemInfo(id:number)
  {
    this.itemServ.deleteItem(id).subscribe(data=>{
      this.showAllItemInfo();
    });
    
  }

  UpdateItemInfo(id:number)
  {
    this.router.navigate(['updateitem',id]);
    
  }
}
