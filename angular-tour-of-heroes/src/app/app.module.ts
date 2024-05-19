import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, MessagesComponent],
  imports: [FormsModule, CommonModule],
  exports: [HeroesComponent],
  providers: [],
})
export class AppModule {}
