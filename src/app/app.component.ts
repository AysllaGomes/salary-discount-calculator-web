import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        protected translate: TranslateService
    ) {
        this.translate.addLangs(['pt', 'en']);
        this.translate.setDefaultLang('pt');

        const browserLang: string = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|pt/) ? browserLang : 'pt');
    }

    switchLanguage(language: string): void {
        this.translate.use(language);
    }
}
