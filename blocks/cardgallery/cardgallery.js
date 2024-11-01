import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const cardItems = [...block.children];
  block.style.setProperty('--card-item-count', cardItems.length); // Add this line

  const cardgalleryHTML = cardItems.map((item) => {
    const picture = item.querySelector('picture');
    const img = picture.querySelector('img');
    const title = item.querySelector('div:not(:first-child)').innerText;

    const optimizedPicture = createOptimizedPicture(img.src, img.alt);

    return `
      <div class="cardgallery-card">
        ${optimizedPicture.outerHTML}
        <div class="cardgallery-card-title">${title}</div>
      </div>
    `;
  }).join('');

  block.innerHTML = cardgalleryHTML;
}
