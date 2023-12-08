import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from '../item.model';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  constructor(private itemServ:ItemService, private route:ActivatedRoute, 
    private router:Router) { }

  id:number;
  item:ItemModel;

  ngOnInit(): void {
    this.showItemInfo();
  }

  showItemInfo()
  {
    this.id = this.route.snapshot.params['id'];
    //alert(this.id);
    this.item = new ItemModel(); 
    this.itemServ.getItemById(this.id).subscribe(data=>{
      console.log(data);
      this.item = data;
    });  
  }

  UpdateItemInfo()
  {
    this.itemServ.updateItem(this.id, this.item).subscribe(data=>{
      this.router.navigate(['view-all']);
    })
  }

}
