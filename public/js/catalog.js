function showAllCoffees() {
  const articles = document.querySelector('.articles');
  articles.classList.remove('only-display-3-articles');

  const allArticles = document.querySelectorAll('.articles .article');
  allArticles.forEach((article) => {
    article.classList.remove('hidden');
  });
  removeButton();
}

function removeButton() {
  const showAllButton = document.querySelector('#see-all-products-button');
  if (!showAllButton) {
    return;
  }
  showAllButton.remove();
}

function bindShowAllCoffees() {
  const showAllButton = document.querySelector('#see-all-products-button');
  if (!showAllButton) {
    return;
  }
  showAllButton.addEventListener('click', showAllCoffees);
}

function bindFilterCategory() {
  const filterCategory = document.querySelector('#filter-category');

  filterCategory.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'all') {
      showAllCoffees();
      removeButton();
      return;
    }

    console.log('Catégorie :', selectedCategory);

    showAllCoffees();
    showHideArticlesBy(selectedCategory);
    
  });
}

function showHideArticlesBy(category) {
  const articles = document.querySelectorAll('.articles .article');
  articles.forEach((article) => {
    const categories = article.dataset.categories;
    if (categories.includes(category)) {
      article.classList.remove('hidden');
    } else {
      article.classList.add('hidden');
    }
  });
}

function init() {
  bindShowAllCoffees();
  bindFilterCategory();
}

init();