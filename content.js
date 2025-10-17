// Keep checking until the navbar is ready
const interval = setInterval(() => {
  const shopItem = document.querySelector('#header--shop--item');
  const petsItem = document.querySelector('#header--pets--item');

  // Once the shop icon exists and pets icon doesn't, inject it
  if (shopItem && !petsItem) {
    clearInterval(interval);

    // Create the new pets item
    const newPetsItem = document.createElement('li');
    newPetsItem.className = 'nav-item d-none d-lg-flex align-items-center justify-content-center text-center mx-1';
    newPetsItem.id = 'header--pets--item';
    newPetsItem.innerHTML = `
      <a class="nav-link" href="https://watchpeoplelive.tv/shop/pets"
         data-bs-toggle="tooltip"
         data-bs-placement="bottom"
         aria-label="Pets"
         data-bs-original-title="Pets">
         <i class="fas fa-cat"></i>
      </a>
    `;

    // Insert right after the Shop icon
    shopItem.insertAdjacentElement('afterend', newPetsItem);

    console.log('[WPD Icon Restorer] Added Pets icon to navbar 🐱');
  }
}, 1000);
