import { OnDestroy, AfterContentInit } from '@angular/core';
import { FlickityOptions } from "../../interfaces/flickity-options.interface";
export declare class FlickityDirective implements AfterContentInit, OnDestroy {
    config: FlickityOptions;
    constructor();
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
