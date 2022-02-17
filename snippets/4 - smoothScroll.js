const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
// scrolls smoothly to the element with the id elementID
smoothScroll('#elementID');
// scrolls smoothly to the first element with class name - elementClassName
smoothScroll('.elementClassName');