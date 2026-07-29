/*
  Sticky add-to-cart bar.

  Reveals itself only once the real add-to-cart button has scrolled out of view,
  so it never covers the button it duplicates. Uses IntersectionObserver — no
  scroll handler, no layout thrash.

  The button itself is plain HTML with a `form` attribute pointing at Dawn's
  product form, so there is no submit logic here.

  On variant change it mirrors Dawn's own price element rather than formatting a
  price itself. That keeps sale prices, price ranges, unit prices and currency
  formatting correct for free, and means a stale price can never be shown.
*/
if (!customElements.get('sticky-atc')) {
  customElements.define(
    'sticky-atc',
    class StickyAtc extends HTMLElement {
      connectedCallback() {
        const form = document.getElementById(this.dataset.formId);
        this.submitButton = form?.querySelector(this.dataset.watch || '.product-form__submit');
        this.footer = document.querySelector('.shopify-section-group-footer-group, #shopify-section-footer');

        // Two conditions, so the bar never covers something the customer needs:
        // show it only when the real button is out of view AND the footer is not
        // yet on screen.
        this.buttonHidden = false;
        this.footerVisible = false;

        // Without a button to watch, showing the bar permanently is better than
        // not showing it at all.
        if (!this.submitButton) {
          this.buttonHidden = true;
        } else {
          this.buttonObserver = new IntersectionObserver(
            ([entry]) => {
              this.buttonHidden = !entry.isIntersecting;
              this.updateVisibility();
            },
            { rootMargin: '0px 0px -80px 0px' }
          );
          this.buttonObserver.observe(this.submitButton);
        }

        if (this.footer) {
          this.footerObserver = new IntersectionObserver(
            ([entry]) => {
              this.footerVisible = entry.isIntersecting;
              this.updateVisibility();
            },
            { rootMargin: '0px 0px -40px 0px' }
          );
          this.footerObserver.observe(this.footer);
        }

        this.updateVisibility();
        this.syncFromPage();

        if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
          this.unsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
            if (event?.data?.sectionId !== this.dataset.sectionId) return;
            this.syncFromPage();
          });
        }
      }

      disconnectedCallback() {
        this.buttonObserver?.disconnect();
        this.footerObserver?.disconnect();
        this.unsubscribe?.();
      }

      updateVisibility() {
        this.classList.toggle('is-visible', this.buttonHidden && !this.footerVisible);
      }

      // Copy the current price and availability out of the main product section.
      syncFromPage() {
        const priceSource = document.getElementById(`price-${this.dataset.sectionId}`);
        const priceTarget = this.querySelector('[data-sticky-price]');
        if (priceSource && priceTarget) {
          priceTarget.innerHTML = priceSource.innerHTML;
        }

        const button = this.querySelector('[data-sticky-submit]');
        if (button && this.submitButton) {
          const soldOut = this.submitButton.hasAttribute('disabled');
          button.disabled = soldOut;
          const label = soldOut ? button.dataset.labelSoldOut : button.dataset.labelDefault;
          if (label) button.textContent = label;
        }
      }
    }
  );
}
