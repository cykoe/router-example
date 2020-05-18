import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {SliderComponent} from './slider/slider.component';

@NgModule({
  declarations: [HeroDetailComponent, HeroListComponent, SliderComponent],
  imports: [CommonModule, HerosRoutingModule],
})
export class HerosModule {}
