import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'she-web-component-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-component-wrapper.component.html',
  styleUrls: ['./web-component-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponentWrapperComponent implements AfterViewInit {
  @ViewChild('customElementHolder') customElementHolder!: ElementRef;
  #document: Document = inject(DOCUMENT);

  ngAfterViewInit(): void {
    this.loadSnippet();
  }

  private async loadSnippet(): Promise<void> {
    await loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfe2',
      exposedModule: './App',
    });
    if (this.customElementHolder !== undefined) {
      try {
        const fragment: DocumentFragment = this.#document
          .createRange()
          .createContextualFragment(`<mfe2-element></mfe2-element>`);
        this.customElementHolder.nativeElement.appendChild(fragment);
      } catch (error: unknown) {
        console.error('Error while loading snippet', error);
      }
    }
  }
}
