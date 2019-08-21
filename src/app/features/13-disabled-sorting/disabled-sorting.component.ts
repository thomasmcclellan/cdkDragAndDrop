import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-disabled-sorting',
  templateUrl: './disabled-sorting.component.html',
  styleUrls: ['./disabled-sorting.component.css']
})
export class DisabledSortingComponent {
  items = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ]
  
  basket = [
    'Oranges',
    'Bananas',
    'Cucumbers'
  ]

  drop(event: CdkDragDrop<string[]>) : void {
    if (event.previousContainer === event.container)
      moveItemInArray(
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      )
    else 
      transferArrayItem(
        event.previousContainer.data, 
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      )
  }
}
