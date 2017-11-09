/// <reference types="flickity" />
import { OnDestroy, AfterContentInit } from '@angular/core';
export declare class FlickityDirective implements AfterContentInit, OnDestroy {
    config: FlickityOptions;
    constructor();
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
