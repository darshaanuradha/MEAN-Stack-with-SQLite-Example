import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  items: any[] = [];
  newItemName: string = '';
  newItemDesc: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(data => {
      this.items = data.items;
    });
  }

  addItem() {
    const newItem = { name: this.newItemName, description: this.newItemDesc };
    this.itemService.addItem(newItem).subscribe(response => {
      console.log('Item added:', response);
      this.items.push({ id: response.id, ...newItem });
      this.newItemName = '';
      this.newItemDesc = '';
    });
  }
}
