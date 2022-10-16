const productsContainer = document.querySelector(".products__items");

import products from "../static/products.json";

const typeMapper = (type) => {
  return ` <div class="products__color-bg active">
  <div class="products__color"></div>
</div>`;
};

const renderTypes = (types, cb) => {
  if (!types) return "";
  return types.map(cb).join("");
};

const productMapper = (product) => {
  return `
            <div class="products__item">
              <div class="products__content">
                <div class="products__title">${product.title}</div>
                <div class="products__description">
                ${product.description}
                </div>
                <div class="products__colors">
                ${renderTypes(product.types, typeMapper)}
                </div>
              </div>

              <img
                class="products__image"
                src="${product.image}"
                alt="goby brush picture"
              />
              </div>

  `;
};

const productHTML = products.map(productMapper).join("");

productsContainer.innerHTML = productHTML;
