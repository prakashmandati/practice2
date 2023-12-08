import { Component } from '@angular/core';
import { TableRegisterService } from '../tableregister.service';
import { UserModel } from '../user';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  confirmedReservations: UserModel[] = [];

  constructor(private tableRegisterService: TableRegisterService) { }

  ngOnInit(): void {
    this.loadConfirmedReservations();
  }

  loadConfirmedReservations() {
    this.tableRegisterService.getConfirmedReservations().subscribe(
      (reservations: UserModel[]) => {
        this.confirmedReservations = reservations;
      },
      (error) => {
        console.error('Error loading confirmed reservations:', error);
      }
    );
  }
}
