const prices = document.querySelectorAll(".invoice tbody tr td:nth-child(3)")

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
});

prices.forEach(( price ) => {
 const priceAfterFormat = formatter.format(parseInt(price.textContent));
  price.textContent = priceAfterFormat 
})

