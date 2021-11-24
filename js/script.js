const humBurger = document.querySelector('#humbarger-icon');
const humBurgerMenu = document.querySelector('#humbargerMenu');
const closeMenu = document.querySelector('#close-menu');

humBurger.addEventListener('click', () => {
  if (humBurgerMenu.style.display === 'none') {
    humBurgerMenu.style.display = 'block';
  } else {
    humBurgerMenu.style.display = 'none';
  }
});

closeMenu.addEventListener('click', () => {
  if (humBurgerMenu.style.display === 'block') {
    humBurgerMenu.style.display = 'none';
  }
});

// Using Object to create dyanmic element in HTML
const topProducts = document.querySelector('.top-products');

const topRankArr = [
  {
    picture: '../images/product1.png',
    title: 'i12 pro max 6.7 inch',
    price: 'AFG 3000 - AFG 5500',
    description: "hight definition face recognistion; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    picture: '../images/product2.png',
    title: '2021 mobile phone with good services',
    price: 'AFG 2500 - AFG 4900',
    description: "mobile phone with good services; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    picture: '../images/product3.png',
    title: 'Samsung S21 Smartphone Android',
    price: 'AFG 7189',
    description: "Samsung Smartphone Android; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    picture: '../images/product4.png',
    title: '2021 Direct sell by company',
    price: 'AFG 2800 - AFG 3700',
    description: "Direct sell by company; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    picture: '../images/product5.png',
    title: 'M11 ultra smartphone',
    price: 'AFG 3700 - AFG 5380',
    description: "ultra smartphone; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    picture: '../images/product6.png',
    title: 'cheap price Android 10',
    price: 'AFG 1050 - AFG 3200',
    description: "cheap price Android; no accounts or sign-ups required. has been the industry's standard",
  },
];

const topRankElement = (cartDesign) => {
  const tRankedProducts = document.createElement('div');
  const tRankedProductsImg = document.createElement('img');
  const tRankedProductsH3 = document.createElement('h3');
  const tRankedProductsH2 = document.createElement('h2');
  const tRankedProductsP = document.createElement('p');
  tRankedProducts.classList = 'tRanked-products';
  tRankedProductsImg.srcset = cartDesign.picture;
  tRankedProductsH3.textContent = cartDesign.title;
  tRankedProductsH2.textContent = cartDesign.price;
  tRankedProductsP.textContent = cartDesign.description;
  tRankedProducts.appendChild(tRankedProductsImg);
  tRankedProducts.appendChild(tRankedProductsH3);
  tRankedProducts.appendChild(tRankedProductsH2);
  tRankedProducts.appendChild(tRankedProductsP);
  topProducts.appendChild(tRankedProducts);
};

topRankArr.forEach((element) => {
  topRankElement(element);
});
