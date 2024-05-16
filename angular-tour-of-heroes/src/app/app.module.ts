import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroesComponent],
  imports: [FormsModule, CommonModule],
  exports: [HeroesComponent],
  providers: [],
})
export class AppModule {}
