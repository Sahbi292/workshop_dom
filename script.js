// Sélectionne tous les produits
const products = document.querySelectorAll('.card-body .card');

// Met à jour le prix total
function updateTotalPrice() {
  let total = 0;
  products.forEach((product) => {
    const quantity = parseInt(product.querySelector('.quantity').textContent);
    const unitPrice = parseFloat(
      product.querySelector('.unit-price').textContent.replace('$', '').trim()
    );
    total += quantity * unitPrice;
  });
  document.querySelector('.total').textContent = total + ' $';
}

// Ajoute les événements aux éléments de chaque produit
products.forEach((product) => {
  const plusBtn = product.querySelector('.fa-plus-circle');
  const minusBtn = product.querySelector('.fa-minus-circle');
  const trashBtn = product.querySelector('.fa-trash-alt');
  const heartIcon = product.querySelector('.fa-heart');
  const quantityEl = product.querySelector('.quantity');

  // Augmenter la quantité
  plusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityEl.textContent);
    quantity++;
    quantityEl.textContent = quantity;
    updateTotalPrice();
  });

  // Diminuer la quantité
  minusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityEl.textContent);
    if (quantity > 0) {
      quantity--;
      quantityEl.textContent = quantity;
      updateTotalPrice();
    }
  });

  // Supprimer le produit
  trashBtn.addEventListener('click', () => {
  quantityEl.textContent = '0';       
  updateTotalPrice();                 
});


  // Aimer le produit
  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('text-danger'); // Change la couleur
  });
});

// Calcul initial au chargement
updateTotalPrice();
