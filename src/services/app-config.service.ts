import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class AppConfigService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  _isPlatformServer:boolean
  get isPlatformServer() {
    if(!this._isPlatformServer) {
      this._isPlatformServer = isPlatformServer(this.platformId)
    }
    return this._isPlatformServer
  }
}
