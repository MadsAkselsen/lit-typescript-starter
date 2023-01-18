
import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('item-test')
export class ItemTest extends LitElement {
    constructor()
    {
        super();
    }
    static styles = css`
      :host {
          display: flex;
      }
    `;

    @property({ type: String }) message: string = 'Welcome to LitElement';

    render() {
        return html`
        <div>
            test123
        </div>
        `;
    }
} 