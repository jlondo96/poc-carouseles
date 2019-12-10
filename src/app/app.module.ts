import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperCarouselComponent } from './components/swiper-carousel/swiper.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  SWIPER_CONFIG,
  SwiperConfigInterface,
  SwiperModule
} from 'ngx-swiper-wrapper';
import { NgxHmCarouselComponent } from './components/ngx-hm-carousel/ngx-hm-carousel.component';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    SwiperCarouselComponent,
    NgxHmCarouselComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    NgxHmCarouselModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    AppRoutingModule,
    OwlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
