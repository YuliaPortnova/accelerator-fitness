const videoContainerElement = document.querySelector('.about__video');
const videoLinkElement = videoContainerElement.querySelector('.about__video-button');

const createIframeElement = () => {
  const iframeElement = document.createElement('iframe');

  iframeElement.setAttribute('allowfullscreen', '');
  iframeElement.setAttribute('title', 'YouTube video player');
  iframeElement.setAttribute('width', '320');
  iframeElement.setAttribute('height', '170');
  iframeElement.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
  iframeElement.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframeElement.setAttribute('src', videoLinkElement.dataset.href);

  return iframeElement;
};

const initVideo = () => {
  videoLinkElement.addEventListener('click', (event) => {
    event.preventDefault();

    const iframeElement = createIframeElement();

    videoContainerElement.innerHTML = '';
    videoContainerElement.classList.add('is-active');
    videoContainerElement.appendChild(iframeElement);
  });
};

export {initVideo};
