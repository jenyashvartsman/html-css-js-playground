import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  templateUrl: './app-panel.component.html',
  styleUrl: './app-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppPanelComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly badge = input.required<string>();
  readonly accentClass = input<string>('text-slate-600');
  readonly badgeClass = input<string>('');
  readonly hasError = input<boolean>(false);
}
