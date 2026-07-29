/*
  Sticky add-to-cart bar.

  Reveals itself only once the real add-to-cart button has scrolled out of view,
  so it never covers the button it duplicates. Uses IntersectionObserver — no
  scroll handler, no layout thrash.

  The button itself is plain HTML with a `form` attribute pointing at Dawn's
  product form, so there is no submit logic here.
*/
if (!customElements.get('sticky-atc')) {
  customElements.define(
    'sticky-atc',
    class StickyAtc extends HTMLElement {
      connectedCallback() {
        const form = document.getElementById(this.dataset.formId);
        const target = form?.querySelector(this.dataset.watch || '.product-form__submit');

        // Without a button to watch, showing the bar permanently is better than
        // not showing it at all.
        if (!target) {
          this.classList.add('is-visible');
          return;
        }

        this.observer = new IntersectionObserver(
          ([entry]) => {
            this.classList.toggle('is-visible', !entry.isIntersecting);
          },
          { rootMargin: '0px 0px -80px 0px' }
        );

        this.observer.observe(target);
      }

      disconnectedCallback() {
        this.observer?.disconnect();
      }
    }
  );
}
