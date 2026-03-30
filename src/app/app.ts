import { Component } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { CssPanelComponent } from './components/css-panel/css-panel.component';
import { HtmlPanelComponent } from './components/html-panel/html-panel.component';
import { JsPanelComponent } from './components/js-panel/js-panel.component';
import { ResultPanelComponent } from './components/result-panel/result-panel.component';

@Component({
  selector: 'app-root',
  imports: [
    AppHeaderComponent,
    HtmlPanelComponent,
    CssPanelComponent,
    JsPanelComponent,
    ResultPanelComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
