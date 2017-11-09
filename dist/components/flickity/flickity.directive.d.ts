import { ElementRef, OnDestroy, EventEmitter, AfterContentInit } from '@angular/core';
import { FlickityOptions } from "../../interfaces/flickity-options.interface";
import { AppConfigService } from '../../services/app-config.service';
export declare class FlickityDirective implements AfterContentInit, OnDestroy {
    private el;
    private appConfigService;
    config: FlickityOptions;
    slideSelect: EventEmitter<number>;
    cellStaticClick: EventEmitter<number>;
    childrenUpdated: EventEmitter<void>;
    private flkty;
    private appendElements;
    private childrenUpdate;
    private childrenUpdateInterval;
    private flickityElement;
    constructor(el: ElementRef, appConfigService: AppConfigService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
