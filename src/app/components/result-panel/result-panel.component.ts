import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectPreviewDocument,
  selectPreviewStatus,
} from '../../store/playground/playground.selectors';

@Component({
  selector: 'app-result-panel',
  standalone: true,
  templateUrl: './result-panel.component.html',
  styleUrl: './result-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPanelComponent {
  private readonly store = inject(Store);
  private readonly previewFrame = viewChild<ElementRef<HTMLIFrameElement>>('previewFrame');

  protected readonly previewDocument = this.store.selectSignal(selectPreviewDocument);
  protected readonly previewStatus = this.store.selectSignal(selectPreviewStatus);

  constructor() {
    effect(() => {
      const frame = this.previewFrame()?.nativeElement;
      const previewDocument = this.previewDocument();

      if (!frame) {
        return;
      }

      const iframeDocument = frame.contentDocument;

      if (!iframeDocument) {
        return;
      }

      iframeDocument.open();
      iframeDocument.write(previewDocument);
      iframeDocument.close();
    });
  }
}
