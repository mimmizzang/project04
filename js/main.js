const aside = document.querySelector("aside");
const close = aside.querySelector("span");

document.querySelectorAll("article").forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });

  el.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });

  el.addEventListener("click", (e) => {
    let tit = e.currentTarget.querySelector("h2").textContent;
    let txt = e.currentTarget.querySelector("p").textContent;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").textContent = tit;
    aside.querySelector("p").textContent = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);
    aside.querySelector("video").play();
    aside.classList.add("on");
  });
});

close.addEventListener("click", () => {
  aside.classList.remove("on");
  aside.querySelector("video").pause();
});
