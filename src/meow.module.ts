import { NgModule } from '@angular/core';
import { MeowComponent } from './meow.component';
import { meowRouting } from './meow.routing';

@NgModule({
  imports: [
    meowRouting
  ],
  declarations: [
    MeowComponent
  ]
})
export class MeowModule { }
