class BeforeAfter {
  constructor(enteryObject) {
    const beforeAfterContainer = document.querySelector(enteryObject.id);
    const before = beforeAfterContainer.querySelector(".bal-before");
    const beforeText = beforeAfterContainer.querySelector(
      ".bal-beforePosition"
    );
    const afterText = beforeAfterContainer.querySelector(".bal-afterPosition");
    const handle = beforeAfterContainer.querySelector(".bal-handle");
    var widthChange = 0;

    beforeAfterContainer
      .querySelector(".bal-before-inset")
      .setAttribute(
        "style",
        "width: " + beforeAfterContainer.offsetWidth + "px;"
      );
    window.onresize = function () {
      beforeAfterContainer
        .querySelector(".bal-before-inset")
        .setAttribute(
          "style",
          "width: " + beforeAfterContainer.offsetWidth + "px;"
        );
    };
    before.setAttribute("style", "width: 50%;");
    handle.setAttribute("style", "left: 50%;");

    //touch screen event listener
    beforeAfterContainer.addEventListener("touchstart", (e) => {
      beforeAfterContainer.addEventListener("touchmove", (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;

        let startOfDiv = beforeAfterContainer.offsetLeft;

        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (
          modifiedCurrentPoint > 10 &&
          modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10
        ) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;

          before.setAttribute("style", "width:" + newWidth + "%;");
          afterText.setAttribute("style", "z-index: 1;");
          handle.setAttribute("style", "left:" + newWidth + "%;");
        }
      });
    });

    //mouse move event listener
    beforeAfterContainer.addEventListener("mousemove", (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute("style", "width:" + newWidth + "%;");
        afterText.setAttribute("style", "z-index:" + "1;");
        handle.setAttribute("style", "left:" + newWidth + "%;");
      }
    });
  }
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    margin: 10,
  });
  document
    .querySelectorAll("[data-src]")
    .forEach((img) => (img.src = img.dataset.src));
});

//sevices
let box = document.getElementById("box");
let services = box.querySelectorAll(".service");
for (let i of services) {
  // i.addEventListener("click", () => {
  //   if (i.classList.contains("active")) {
  //     i.classList.remove("active");
  //     return;
  //   }
  //   let findactive = box.querySelectorAll(".active");
  //   for (let j of findactive) {
  //     j.classList.remove("active");
  //   }
  //   i.classList.add("active");
  // });
  i.addEventListener("click", function () {
    let isActive = i.classList.contains("active");
    services.forEach((service) => service.classList.remove("active"));
    i.classList.add("active");
    if (isActive) {
      i.classList.remove("active");
    } else {
      i.classList.add("active");
    }
  });
}
//Our Services

new BeforeAfter({
  id: "#one",
});