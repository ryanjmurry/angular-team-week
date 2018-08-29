import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../../../models/menu-item';
import { MenuItemService } from '../../../../services/menu-item.service';

@Component({
  selector: 'app-admin-menu-details',
  templateUrl: './admin-menu-details.component.html',
  styleUrls: ['./admin-menu-details.component.css']
})
export class AdminMenuDetailsComponent implements OnInit {

  @Input() menuItem: MenuItem;

  updateIsActive: boolean = false;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
  }

  showUpdateForm() {
    this.updateIsActive = true;
  }

  deleteMenuItem() {
    this.menuItemService.deleteMenuItem(this.menuItem.key);
  }

  onSubmit(key: string, updateName: string, updatePrice: string, updateDescription) {
    this.updateIsActive = false;

    this.menuItemService.updateMenuItem(key, {
      name: updateName,
      price: updatePrice,
      description: updateDescription
    });
  }
}
