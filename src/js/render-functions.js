/**
 * Generate image string with data
 *
 * @param webformatURL
 * @param largeImageURL
 * @param tags
 * @param likes
 * @param views
 * @param comments
 * @param downloads
 * @return string
 */
export const generateImageGalleryItem = ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      width="360"
      height="200"
    />
  </a>
  <ul>
    <li>
        <h3>Likes</h3>
        <p>${likes}</p>
    </li>
    <li>
        <h3>Views</h3>
        <p>${views}</p>
    </li>
    <li>
        <h3>Comments</h3>
        <p>${comments}</p>
    </li>
    <li>
        <h3>Downloads</h3>
        <p>${downloads}</p>
    </li>
  </ul>
</li>
`;

/**
 * Render images to gallery
 *
 * @param data
 */
export function renderImages(data) {
    const gallery = document.getElementById('gallery');
    const imageElements = data.map(generateImageGalleryItem).join('');

    gallery.insertAdjacentHTML('afterbegin', imageElements);
}

export function loadMoreImages(data) {
  const gallery = document.getElementById('gallery');
  const imageElements = data.map(generateImageGalleryItem).join('');

  gallery.insertAdjacentHTML('beforeend', imageElements);
}