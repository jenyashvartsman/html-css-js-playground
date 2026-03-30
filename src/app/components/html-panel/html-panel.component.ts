import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppInputComponent } from '../app-input/app-input.component';
import { AppPanelComponent } from '../app-panel/app-panel.component';
import { PlaygroundActions } from '../../store/playground/playground.actions';
import { selectHtml } from '../../store/playground/playground.reducer';
import { selectHtmlError } from '../../store/playground/playground.selectors';

@Component({
  selector: 'app-html-panel',
  standalone: true,
  imports: [AppPanelComponent, AppInputComponent],
  templateUrl: './html-panel.component.html',
  styleUrl: './html-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlPanelComponent {
  private readonly store = inject(Store);

  protected readonly html = this.store.selectSignal(selectHtml);
  protected readonly error = this.store.selectSignal(selectHtmlError);

  protected updateHtml(html: string): void {
    this.store.dispatch(PlaygroundActions.setHTML({ html }));
  }
}
