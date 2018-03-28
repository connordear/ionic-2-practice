import { Component, Input } from '@angular/core';
import { Lesson } from '../../classes/Lesson';

/**
 * Generated class for the LessonHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-header',
  templateUrl: 'lesson-header.html'
})
export class LessonHeaderComponent {
  @Input() lesson: Lesson;
  constructor() {
    console.log('Hello LessonHeaderComponent Component');
  }

  onRatingChange(e) {
    console.log(e);
  }

}
