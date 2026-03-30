import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlaygroundActions } from '../../store/playground/playground.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  private readonly store = inject(Store);

  protected resetPlayground(): void {
    this.store.dispatch(PlaygroundActions.reset());
  }
}
