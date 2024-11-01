import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const articles = [...block.children].map((article) => {
    const imgDiv = article.querySelector('div:nth-child(1) picture');
    const title = article.querySelector('div:nth-child(2)').textContent;
    const imgSrc = imgDiv ? imgDiv.querySelector('img').src : null;

    return {
      imgSrc,
      title,
    };
  });

  block.innerHTML = articles.map((article, index) => `
    <div class="articles-card ${!article.imgSrc ? 'no-image' : ''}" style="${article.imgSrc ? `background-image: url('${article.imgSrc}')` : 'background-color: #6ec6b3;'}">
      <div class="articles-card-content">
        <h2 class="articles-title">${article.title}</h2>
      </div>
    </div>
  `).join('');
}
