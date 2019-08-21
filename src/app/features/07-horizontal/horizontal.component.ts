import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css']
})
export class HorizontalComponent {
  timePeriods = [
    'Bronze Age',
    'Iron Age',
    'Middle Ages',
    'Early Modern Period',
    'Long Nineteenth Century'
  ]

  drop(event: CdkDragDrop<string[]>) : void {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex)
  }
}
