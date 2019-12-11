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
import { NgxOwlCarouselComponent } from './components/ngx-owl-carousel/ngx-owl-carousel.component';
import { NgxHmCarouselComponent } from './components/ngx-hm-carousel/ngx-hm-carousel.component';
import { NgxOwlCarouselOComponent } from './components/ngx-owl-carousel-o/ngx-owl-carousel-o.component';

/* ngx-owl-carousel-o */
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: max-line-length
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; SE NECESITA, SE COMENTA ES PORQUE YA SE ENCUENTRA ARRIBA */
import { CarouselModule } from 'ngx-owl-carousel-o';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    SwiperCarouselComponent,
    NgxOwlCarouselComponent,
    NgxHmCarouselComponent,
    NgxOwlCarouselOComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    SwiperModule,
    OwlModule,
    NgxHmCarouselModule,
    SwiperModule,
    /* ngx-owl-carousel-o INI*/
    RouterModule.forRoot(routes),
    CarouselModule
  ],
  /* ngx-owl-carousel-o FIN*/
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
