const prices = document.querySelectorAll(
  ".invoice tbody tr td:nth-child(3) input",
);
const inputName = document.querySelectorAll(
  ".invoice tbody tr td input[name='name']",
);
const inputQuantity = document.querySelectorAll(
  ".invoice tbody tr td input[name='quantity']",
);

console.log(inputName);
console.log(inputQuantity);

prices.forEach((price) => {
  price.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    const inputCursor = e.target.selectionStart;

    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value ? parseInt(value) : 0);

    e.target.value = formatter.replace();

    e.target.style.width = e.target.textLength + "ch";
    input.selectionStart = input.selectionEnd = inputCursor;
    e.target.style.maxWidth = "20ch";
  });
});
