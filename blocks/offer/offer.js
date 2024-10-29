import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Extract data from the original block HTML
  const offerValidity = block.querySelector('.offer > div:nth-child(3) > div').textContent;

  // Extract the image source
  const imageDiv = block.querySelector('.offer > div:nth-child(1) > div');
  const imageSrc = imageDiv.querySelector('img').src;

  // Create a picture element for the image
  const picture = createOptimizedPicture(imageSrc);

  // Replace the block's inner HTML with the new structure
  block.innerHTML = `
    ${picture.outerHTML}
    <div class="offer-content">
      <p class="offer-subtitle">Last few days of sale 30%-70% off</p>
      <h2 class="offer-title">Buy 2 get 1 free</h2>
      <p class="offer-subtext">on all sale items</p>
      <p class="offer-description">Testing the placeholder for Banners and Fragments</p>
      <p class="offer-datetime">10/03/2024 04:00:10 PM</p>
      <div class="offer-buttons">
        <a href="#" class="button secondary">Women</a>
        <a href="#" class="button secondary">Men</a>
        <a href="#" class="button secondary">Kids</a>
        <a href="#" class="button secondary">Repurposed Gems</a>
        <a href="#" class="button secondary">Dressing for the metaverse</a>
      </div>
      <p class="offer-validity">${offerValidity}</p>
    </div>
  `;
}
