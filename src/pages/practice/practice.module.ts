import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PracticePage } from './practice';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PracticePage,
  ],
  imports: [
    IonicPageModule.forChild(PracticePage),
    ComponentsModule
  ],
})
export class PracticePageModule {

}
