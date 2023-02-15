const images = document.querySelectorAll("img[data-src]");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

function handle(images, observer) {
  images.forEach((img) => {
    if (img.intersectionRatio > 0 && img.target.hasAttribute("data-src")) {
      loadImg(img.target);
    }
  });
}
function loadImg(img) {
  img.src = img.getAttribute("data-src");
  img.removeAttribute("data-src");
}

const observer = new IntersectionObserver(handle, options);

images.forEach((img) => {
  observer.observe(img);
});
