declare let require: any;

import {
  Directive, OnDestroy, Input, Output, EventEmitter, AfterContentInit
} from '@angular/core';


@Directive({ selector: '[flickity]' })
export class FlickityDirective implements AfterContentInit, OnDestroy {

  @Input('flickity') config: FlickityOptions = {};

  
  constructor() { }

  ngAfterContentInit(): void {
    // this.init();
    console.log('HI', this.config);
  }

  ngOnDestroy(): void {
    // this.destroy();
  }

  // init() {
  //   if (this.appConfigService.isPlatformServer || !this.flickityElement) {
  //     return;
  //   }

  //   const Flickity = require('flickity');

  //   let config = this.config;

  //   if (this.flkty) {
  //     config['initialIndex'] = this.flkty.selectedIndex;
  //     this.destroy();
  //   }

  //   this.flkty = new Flickity(this.flickityElement, config);

  //   this.flkty.on('select', () => {
  //     this.slideSelect.emit(this.selectedIndex);
  //   });

  //   this.flkty.on('staticClick', (_event: any, _pointer: any, _cellElement: any, cellIndex: any) => {
  //     this.cellStaticClick.emit(cellIndex);
  //   });

  //   this.updateElements();

  //   setTimeout(() => this.resize(), this.childrenUpdateInterval);
  // }

  // destroy() {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   if (this.childrenUpdate) {
  //     clearInterval(this.childrenUpdate);
  //     this.childrenUpdate = undefined;
  //   }

  //   this.flkty.destroy();
  // }

  // resize() {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   this.flkty.resize();
  // }

  // reposition() {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   this.flkty.reposition();
  // }

  // previous() {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   this.flkty.previous();
  // }

  // previousAvailable(): boolean {
  //   if (this.selectedIndex === undefined) {
  //     return false;
  //   }

  //   return this.selectedIndex > 0;
  // }

  // next() {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   this.flkty.next();
  // }

  // nextAvailable(): boolean {
  //   if (this.selectedIndex === undefined || !this.slides) {
  //     return false;
  //   }

  //   return this.selectedIndex < this.slides - 1;
  // }

  // get selectedIndex(): number {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   return this.flkty.selectedIndex;
  // }

  // get cells(): number {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   return this.flkty.cells.length;
  // }

  // get slides(): number {
  //   if (!this.flkty) {
  //     return;
  //   }

  //   return this.flkty['slides'].length;
  // }

  // append(el: HTMLElement) {
  //   this.appendElements.push(el);
  // }

  // prepend(el: HTMLElement) {
  //   this.flkty.prepend(el);
  // }

  // private updateElements() {
  //   if (!this.flkty || this.appendElements.length == 0) {
  //     return;
  //   }

  //   this.appendElements.forEach(el => {
  //     this.flkty.append(el)
  //   });
  //   this.appendElements = [];

  //   this.resize();
  //   this.childrenUpdated.emit();
  //   this.childrenUpdate = setTimeout(this.updateElements(), this.childrenUpdateInterval);
  // }

  // select(index: number, isWrapped = true, isInstant = false) {
  //   this.flkty.select(index, isWrapped, isInstant);
  // }
}
