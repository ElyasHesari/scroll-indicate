const progress = document.querySelector(".scroll-bar");

window.addEventListener("scroll", ()=> {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress.style.width = `${scrolled}%`;
});


