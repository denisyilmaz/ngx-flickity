import { ElementRef, OnDestroy, AfterContentInit } from '@angular/core';
import { FlickityOptions } from "../../interfaces/flickity-options.interface";
import { AppConfigService } from '../../services/app-config.service';
export declare class FlickityDirective implements AfterContentInit, OnDestroy {
    private el;
    private appConfigService;
    config: FlickityOptions;
    constructor(el: ElementRef, appConfigService: AppConfigService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
