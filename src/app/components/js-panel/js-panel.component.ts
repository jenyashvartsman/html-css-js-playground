import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlaygroundActions } from '../../store/playground/playground.actions';
import { selectJs } from '../../store/playground/playground.reducer';
import { selectJsError } from '../../store/playground/playground.selectors';

@Component({
  selector: 'app-js-panel',
  standalone: true,
  templateUrl: './js-panel.component.html',
  styleUrl: './js-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsPanelComponent {
  private readonly store = inject(Store);

  protected readonly js = this.store.selectSignal(selectJs);
  protected readonly error = this.store.selectSignal(selectJsError);

  protected updateJs(event: Event): void {
    const js = (event.target as HTMLTextAreaElement).value;
    this.store.dispatch(PlaygroundActions.setJS({ js }));
  }
}
