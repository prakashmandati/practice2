import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item.model';
import { ItemService } from '../item-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item-status.component.html',
  styleUrls: ['./item-status.component.css']
})
export class ItemStatusComponent implements OnInit {

  items: ItemModel[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  enableItem(itemId: number): void {
    this.itemService.enableItem(itemId).subscribe(updatedItem => {
      // Find and update the item in the list
      const index = this.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.items[index] = updatedItem;
      }
    });
  }

  disableItem(itemId: number): void {
    this.itemService.disableItem(itemId).subscribe(updatedItem => {
      // Find and update the item in the list
      const index = this.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.items[index] = updatedItem;
      }
    });
  }
}
