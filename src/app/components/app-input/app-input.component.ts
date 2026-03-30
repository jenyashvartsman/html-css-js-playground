import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInputComponent {
  readonly inputId = input.required<string>();
  readonly ariaLabel = input.required<string>();
  readonly value = input.required<string>();
  readonly placeholder = input<string>('');
  readonly error = input<string | null>(null);
  readonly tintClass = input<string>('');

  readonly valueChange = output<string>();

  protected onInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.valueChange.emit(value);
  }
}
