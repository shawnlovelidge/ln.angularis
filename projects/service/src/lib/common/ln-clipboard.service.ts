import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LnClipboardService {
  private tempTextArea: HTMLTextAreaElement | undefined;
  constructor(
    @Inject(DOCUMENT) public document: any,
    @Inject('WINDOW') private window: any
  ) {}
  public get isSupported(): boolean {
    return (
      !!this.document.queryCommandSupported &&
      !!this.document.queryCommandSupported('copy') &&
      !!this.window
    );
  }

  public isTargetValid(
    element: HTMLInputElement | HTMLTextAreaElement
  ): boolean {
    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement
    ) {
      if (element.hasAttribute('disabled')) {
        throw new Error(
          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
        );
      }
      return true;
    }
    throw new Error('Target should be input or textarea');
  }

  /**
   * copyFromInputElement
   */
  public copyFromInputElement(
    targetElm: HTMLInputElement | HTMLTextAreaElement
  ): boolean {
    try {
      this.selectTarget(targetElm);
      const re = this.copyText();
      this.clearSelection(targetElm, this.window);
      return re && this.isCopySuccessInIE11();
    } catch (error) {
      return false;
    }
  }

  // this is for IE11 return true even if copy fail
  public isCopySuccessInIE11() {
    const clipboardData = this.window.clipboardData;
    if (clipboardData && clipboardData.getData) {
      if (!clipboardData.getData('Text')) {
        return false;
      }
    }
    return true;
  }

  /**
   * Creates a fake textarea element, sets its value from `text` property,
   * and makes a selection on it.
   */
  public copyFromContent(
    content: string,
    container: HTMLElement = this.window.document.body
  ) {
    // check if the temp textarea is still belong the current container.
    // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
    if (this.tempTextArea && !container.contains(this.tempTextArea)) {
      // @ts-ignore
      this.destroy(this.tempTextArea.parentElement);
    }

    if (!this.tempTextArea) {
      this.tempTextArea = this.createTempTextArea(this.document, this.window);
      try {
        container.appendChild(this.tempTextArea);
      } catch (error) {
        throw new Error('Container should be a Dom element');
      }
    }
    this.tempTextArea.value = content;
    return this.copyFromInputElement(this.tempTextArea);
  }

  // remove temporary textarea if any
  public destroy(container: HTMLElement = this.window.document.body) {
    if (this.tempTextArea) {
      container.removeChild(this.tempTextArea);
      // removeChild doesn't remove the reference from memory
      this.tempTextArea = undefined;
    }
  }

  // select the target html input element
  private selectTarget(
    inputElement: HTMLInputElement | HTMLTextAreaElement
  ): number | undefined {
    inputElement.select();
    inputElement.setSelectionRange(0, inputElement.value.length);
    return inputElement.value.length;
  }

  private copyText(): boolean {
    return this.document.execCommand('copy');
  }
  // Moves focus away from `target` and back to the trigger, removes current selection.
  private clearSelection(
    inputElement: HTMLInputElement | HTMLTextAreaElement,
    window: Window
  ) {
    // tslint:disable-next-line:no-unused-expression
    inputElement && inputElement.focus();
    // @ts-ignore
    window.getSelection().removeAllRanges();
  }

  // create a fake textarea for copy command
  private createTempTextArea(
    doc: Document,
    window: Window
  ): HTMLTextAreaElement {
    const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
    let ta: HTMLTextAreaElement;
    ta = doc.createElement('textarea');
    // Prevent zooming on iOS
    ta.style.fontSize = '12pt';
    // Reset box model
    ta.style.border = '0';
    ta.style.padding = '0';
    ta.style.margin = '0';
    // Move element out of screen horizontally
    ta.style.position = 'absolute';
    ta.style[isRTL ? 'right' : 'left'] = '-9999px';
    // Move element to the same position vertically
    const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
    ta.style.top = yPosition + 'px';
    ta.setAttribute('readonly', '');
    return ta;
  }
}
