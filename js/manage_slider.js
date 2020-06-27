document.querySelector(".btn.next").addEventListener("click", scrollToNextPage);
document.querySelector(".btn.prev").addEventListener("click", scrollToPrevPage);

Array.from(document.querySelectorAll(".btn.next")).forEach((btn) => {
  btn.addEventListener("click", (e) => scrollToNextPage(e));
});

Array.from(document.querySelectorAll(".btn.prev")).forEach((btn) => {
  btn.addEventListener("click", (e) => scrollToPrevPage(e));
});

function scrollToNextPage(e) {
  const gallery = document.querySelector(
    `#paginated_gallery-${e.target.dataset.pid}`
  );
  const gallery_scroller = gallery.querySelector(".gallery_scroller");
  const gallery_item = gallery_scroller.querySelector("div");
  const gallery_item_size = gallery_item.clientWidth;
  const total_size = gallery_scroller.children.length * gallery_item_size
  gallery_scroller.scrollBy(gallery_item_size, 0);
  console.log(total_size, gallery_scroller.scrollLeft)
  console.log(gallery_scroller)
  if (gallery_scroller.scrollLeft === gallery_scroller.scrollLeftMax){
    gallery_scroller.scrollBy(-gallery_scroller.scrollWidth,0)
  }
}
function scrollToPrevPage(e) {
  const gallery = document.querySelector(
    `#paginated_gallery-${e.target.dataset.pid}`
  );
  const gallery_scroller = gallery.querySelector(".gallery_scroller");
  const gallery_item_size = gallery_scroller.querySelector("div").clientWidth;
  gallery_scroller.scrollBy(-gallery_item_size, 0);

  console.log(-gallery_item_size)
  if (gallery_scroller.scrollLeft === 0){
    gallery_scroller.scrollBy(gallery_scroller.scrollWidth,0)
  }
}
