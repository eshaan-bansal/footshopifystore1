/*
  StrideWell quantity-break offer.

  Each tier is a radio. Choosing one writes its quantity into the product
  form's quantity input, so the tier the customer picks is the quantity that
  actually reaches the cart. If the theme editor has no quantity selector block
  on the page, we add a hidden quantity input to the form instead.

  The DISCOUNT itself is not applied here — it must exist as a real automatic
  discount (or bundle app) in Shopify admin. This component only controls
  quantity and the label the customer reads.
*/
if (!customElements.get('stridewell-offer')) {
  customElements.define(
    'stridewell-offer',
    class StrideWellOffer extends HTMLElement {
      constructor() {
        super();
        this.formId = this.dataset.formId;
        this.onChange = this.onChange.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
      }

      connectedCallback() {
        this.addEventListener('change', this.onChange);

        const checked = this.querySelector('input[type="radio"]:checked');
        if (checked) this.applyQuantity(checked.value);

        // Keep the tiers honest: if the customer edits the quantity selector
        // directly, the highlighted tier must follow or clear.
        this.quantityField = this.form?.querySelector('input[name="quantity"]');
        this.quantityField?.addEventListener('change', this.onQuantityChange);
      }

      disconnectedCallback() {
        this.removeEventListener('change', this.onChange);
        this.quantityField?.removeEventListener('change', this.onQuantityChange);
      }

      onQuantityChange(event) {
        if (event.target.dataset.stridewellSync === 'true') return;

        const quantity = parseInt(event.target.value, 10);
        this.querySelectorAll('input[type="radio"]').forEach((radio) => {
          radio.checked = parseInt(radio.value, 10) === quantity;
        });
      }

      onChange(event) {
        const input = event.target;
        if (!input.matches('input[type="radio"]')) return;
        this.applyQuantity(input.value);
      }

      get form() {
        if (!this.formId) return null;
        return document.getElementById(this.formId);
      }

      applyQuantity(quantity) {
        const parsed = parseInt(quantity, 10);
        if (!Number.isFinite(parsed) || parsed < 1) return;

        const form = this.form;
        if (!form) return;

        // Prefer the visible quantity selector so the customer can see the change.
        let field = form.querySelector('input[name="quantity"]');

        if (!field) {
          field = document.createElement('input');
          field.type = 'hidden';
          field.name = 'quantity';
          field.dataset.stridewellQuantity = 'true';
          form.appendChild(field);
        }

        field.value = parsed;
        // Flag the event so onQuantityChange doesn't treat our own write as a
        // manual edit and fight the radio the customer just picked.
        field.dataset.stridewellSync = 'true';
        // Let Dawn's quantity-input component update its own +/- button state.
        field.dispatchEvent(new Event('change', { bubbles: true }));
        delete field.dataset.stridewellSync;
      }
    }
  );
}
