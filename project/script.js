const carousel01 = [
  {
    imgHeader: "assets/images/carousel-1/image-1.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-1/image-2.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-1/image-3.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-1/image-4.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
];

const carousel02 = [
  {
    imgHeader: "assets/images/carousel-2/image-1.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-2.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-3.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-4.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-1.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-2.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-3.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-4.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-1.jpg",
    HeartCount: 382,
    title: "BLISS TEXTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
  {
    imgHeader: "assets/images/carousel-2/image-2.jpg",
    HeartCount: 382,
    title: "DECAYED",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentCount: 374,
  },
];

const cards = document.querySelectorAll(".list-card");
const container = document.querySelector(".carousel-section");
const carouselContainer = document.querySelectorAll(".carousel-section");
const numOfCards = [ carousel01.length, carousel02.length];
const listCardsWidth = [];
let cardWidth = container.offsetWidth - 75;
let startX = 0, endX = 0;

window.addEventListener("resize", () => {
  cardWidth = container.offsetWidth - 75;
  setupCarousel();
});

const createCarousel = () => {
  carousel01.forEach(card => {
    const html = `
      <div class="card">
        <div class="card-header">
          <img src="${card.imgHeader}">
          <div class="heart">♥ ${card.HeartCount}</div>
        </div>
        <div class="card-content">
          <div class="rotate-square"></div>
          <div class="title">${card.title}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. </p>
        </div>
        <div class="card-footer">
          <div>
            <img src="assets/images/comment-icon.jpg" alt="comments" width="20" height="15">
            <span>${card.commentCount} comments</span> 
          </div>
          <div class="three-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;

    cards[0].innerHTML = cards[0].innerHTML + html;
  });

  carousel02.forEach(card => {
    const html = `
      <div class="card">
        <div class="card-header">
          <img src="${card.imgHeader}">
          <div class="heart">♥ ${card.HeartCount}</div>
        </div>
        <div class="card-content">
        <div class="rotate-square"></div>
          <div class="title">${card.title}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. </p>
        </div>
        <div class="card-footer">
          <div>
            <img src="assets/images/comment-icon.jpg" alt="comments" width="20" height="15">
            <span>${card.commentCount} comments</span> 
          </div>
          <div class="three-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;

    cards[1].innerHTML = cards[1].innerHTML + html;
  });
}

const setupCarousel = () => {
  if(cardWidth > 300 && window.matchMedia("(max-width: 750px)").matches) cardWidth = 300;
  else if(cardWidth > 400) cardWidth = 400;
  document.querySelectorAll(".card").forEach(element => (element.style.width = cardWidth + "px"));
  listCardsWidth[0] = (24 + cardWidth) * numOfCards[0];
  listCardsWidth[1] = (24 + cardWidth) * numOfCards[1];

  carouselContainer.forEach((element, index) => {
    let display = "none";
    if(listCardsWidth[index] > container.offsetWidth && window.matchMedia("(min-width: 1024px)").matches) {
      display = "block";
    }
    Array.from(element.getElementsByTagName("a")).forEach(ele => ele.style.display = display);
  })

  cards[0].style.width = listCardsWidth[0] + "px";
  cards[1].style.width = listCardsWidth[1] + "px";
  let widthNextButton = 150;
  if(window.getComputedStyle(document.querySelector(".next")).display === "none") widthNextButton = 0;

  const marginLeftCarousels = [container.offsetWidth - listCardsWidth[0] - widthNextButton, container.offsetWidth - listCardsWidth[1] - widthNextButton];
  
  if(marginLeftCarousels[0] > 0) marginLeftCarousels[0] = 60;
  if(marginLeftCarousels[1] > 0) marginLeftCarousels[1] = 60;
  cards[0].style.marginLeft = marginLeftCarousels[0] + "px";
  cards[1].style.marginLeft = marginLeftCarousels[1] + "px";
};

const moveRight = (indexOfCarousel) => {
  const currentMarginLeft = +cards[indexOfCarousel].style.marginLeft.replace("px", "");
  let newMarginLeft = currentMarginLeft + (24 + cardWidth);
  if(newMarginLeft > 0) newMarginLeft = 0;
  cards[indexOfCarousel].style.marginLeft = newMarginLeft + "px";
}

const moveLeft = (indexOfCarousel) => {
  const currentMarginLeft = +cards[indexOfCarousel].style.marginLeft.replace("px", "");
  let newMarginLeft = currentMarginLeft - (24 + cardWidth);
  let widthNextButton = 150;
  if(window.getComputedStyle(document.querySelector(".next")).display === "none") widthNextButton = 0;
  const marginLeftInit = container.offsetWidth - listCardsWidth[indexOfCarousel] - widthNextButton;
  if(newMarginLeft < marginLeftInit) newMarginLeft = marginLeftInit;
  cards[indexOfCarousel].style.marginLeft = newMarginLeft + "px";
}

cards[0].addEventListener('touchstart', (event) => {
  startX = event.changedTouches[0].clientX;
})

cards[0].addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX;
  if(endX - startX > 20) moveRight(0);
  else moveLeft(0);
})

cards[1].addEventListener('touchstart', (event) => {
  startX = event.changedTouches[0].clientX;
})

cards[1].addEventListener('touchend', (event) => {
  endX = event.changedTouches[0].clientX;
  if(endX - startX > 20) moveRight(1);
  else moveLeft(1);
})

createCarousel();
setupCarousel();


const fillBackgroundColorHeader = () => {
  if(window.matchMedia("(min-width: 1024px)").matches) {
    if (window.scrollY >= 100) {
      header.style.backgroundColor = "#140327";
    } else {
      header.style.backgroundColor = "transparent";
    }
  } else {
    header.style.backgroundColor = "transparent";
  }
};
const header = document.querySelector("header");
window.addEventListener("scroll", fillBackgroundColorHeader);