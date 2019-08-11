import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-transferring',
  templateUrl: './transferring.component.html',
  styleUrls: ['./transferring.component.css']
})
export class TransferringComponent {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ]

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check email',
    'Walk dog'
  ]

  drop(event: CdkDragDrop<string[]>) : void {
    if (event.previousContainer === event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    else 
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
  }
}
