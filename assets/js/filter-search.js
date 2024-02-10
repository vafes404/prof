const searchInput = document.querySelector('.input')
const products = document.getElementsByClassName('item');

searchInput.addEventListener('keyup', function() {
  const searchText = searchInput.value.toLowerCase();

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const title = product.querySelector('h2').textContent.toLowerCase();
    const doesMatch = title.includes(searchText)

    if (doesMatch) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  }
});
