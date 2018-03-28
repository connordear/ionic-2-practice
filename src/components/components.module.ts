import { NgModule } from '@angular/core';
import { LessonHeaderComponent } from './lesson-header/lesson-header';
import {IonicModule} from 'ionic-angular';
import { Chip } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
	declarations: [LessonHeaderComponent],
	imports: [
		IonicModule.forRoot(Chip),
		Ionic2RatingModule
	],
	exports: [LessonHeaderComponent]
})
export class ComponentsModule {}
