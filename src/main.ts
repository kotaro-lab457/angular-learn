import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); // 本番環境
}

// ブラウザでアプリを起動 platformBrowserDynamic()
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
