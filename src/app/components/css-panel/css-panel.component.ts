import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppInputComponent } from '../app-input/app-input.component';
import { AppPanelComponent } from '../app-panel/app-panel.component';
import { PlaygroundActions } from '../../store/playground/playground.actions';
import { selectCss } from '../../store/playground/playground.reducer';
import { selectCssError } from '../../store/playground/playground.selectors';

@Component({
  selector: 'app-css-panel',
  standalone: true,
  imports: [AppPanelComponent, AppInputComponent],
  templateUrl: './css-panel.component.html',
  styleUrl: './css-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssPanelComponent {
  private readonly store = inject(Store);

  protected readonly css = this.store.selectSignal(selectCss);
  protected readonly error = this.store.selectSignal(selectCssError);

  protected updateCss(css: string): void {
    this.store.dispatch(PlaygroundActions.setCSS({ css }));
  }
}
