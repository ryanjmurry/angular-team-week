import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuItemService } from '../../../../services/menu-item.service';

@Component({
  selector: 'app-admin-menu-list',
  templateUrl: './admin-menu-list.component.html',
  styleUrls: ['./admin-menu-list.component.css']
})
export class AdminMenuListComponent implements OnInit {

  menuItems: any;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
    this.getMenuItemsList();
  }

  getMenuItemsList() {
    this.menuItemService.getMenuItemsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) 
      )
    ).subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

  deleteMenuItems() {
    this.menuItemService.deleteAll();
  }
}
