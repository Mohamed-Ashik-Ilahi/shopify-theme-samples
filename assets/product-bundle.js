document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bundle-form]').forEach((form) => {
    const checkboxes = form.querySelectorAll('input[name="bundle_item"]');
    const totalEl = form.querySelector('[data-bundle-total]');
    const submitBtn = form.querySelector('[data-bundle-submit]');

    const formatMoney = (cents) => {
      // Simplified formatter for demo purposes.
      // In production, use Shopify.formatMoney with shop money_format.
      return '$' + (cents / 100).toFixed(2);
    };

    const updateTotal = () => {
      let totalCents = 0;
      let anyChecked = false;

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          anyChecked = true;
          totalCents += parseInt(checkbox.dataset.price, 10) || 0;
        }
      });

      if (totalEl) {
        totalEl.textContent = formatMoney(totalCents);
      }
      if (submitBtn) {
        submitBtn.disabled = !anyChecked;
      }
    };

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updateTotal);
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const selectedVariantIds = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      if (selectedVariantIds.length === 0) return;

      const items = selectedVariantIds.map((id) => ({ id, quantity: 1 }));

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
        .then((response) => response.json())
        .then(() => {
          document.dispatchEvent(new CustomEvent('cart:updated'));
        })
        .catch((error) => console.error('Bundle add-to-cart failed:', error));
    });

    updateTotal();
  });
});
