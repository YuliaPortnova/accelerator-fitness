const videoContainer = document.querySelector('.about__video');
const videoLink = videoContainer.querySelector('.about__video-button');

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('title', 'YouTube video player');
  iframe.setAttribute('width', '320');
  iframe.setAttribute('height', '170');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.setAttribute('src', videoLink.dataset.href);

  return iframe;
};

const initVideo = () => {
  videoLink.addEventListener('click', (event) => {
    event.preventDefault();

    const iframe = createIframe();

    videoContainer.innerHTML = '';
    videoContainer.classList.add('is-active');
    videoContainer.appendChild(iframe);
  });
}

export {initVideo};
