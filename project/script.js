const DESKTOP_SCREEN_WIDTH = 1024;
const BACKGROUND_COLOR = "#140327";

const fillBgColorHeader = () => {
  if(window.matchMedia(`(min-width: ${DESKTOP_SCREEN_WIDTH}px)`).matches) {
    if (window.scrollY >= 100) {
      header.style.backgroundColor = BACKGROUND_COLOR;
    } else {
      header.style.backgroundColor = "transparent";
    }
  } else {
    header.style.backgroundColor = "transparent";
  }
};
const header = document.querySelector("header");
window.addEventListener("scroll", fillBgColorHeader);

const carouselArray = [ 
  [
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
  ],
  [
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
  ],
];

const MARGIN_LEFT = 75;
const NEXT_BUTTON_WIDTH = 150;
const MAX_CARD_WIDTH = 320;
const CARD_PADDING = 24;
const DISTANCE_OF_MOUSE_MOVE = 20;

function buildCarousel () {
  const listCardContainer = document.querySelectorAll(".list-card");
  const container = document.querySelector(".carousel-section");
  const carouselContainer = document.querySelectorAll(".carousel-section");
  const numOfCards = carouselArray.map(item => item.length);
  let listCardWidth = [];
  let cardWidth = container.offsetWidth - MARGIN_LEFT;
  let startX = 0, endX = 0;
  
  const addCardToContainer = (array, index) => {
    array.forEach(card => {
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
  
      listCardContainer[index].innerHTML = listCardContainer[index].innerHTML + html;
    });
  }
  
  const calcNewMarginLeftValue = (carouselIndex, isMoveLeft = false) => {
    let temp = 1;
    if(isMoveLeft) temp = -1;
    const currentMarginLeft = 
    +listCardContainer[carouselIndex].style.marginLeft.replace("px", "");
    let newMarginLeft = currentMarginLeft + (CARD_PADDING + cardWidth) * temp;
    if(isMoveLeft) {
      const marginLeftInit = calcMarginLeftInit(carouselIndex);
      if(newMarginLeft < marginLeftInit) newMarginLeft = marginLeftInit;
    } else {
      if(newMarginLeft > 0) newMarginLeft = 0;
    }
    return newMarginLeft;
  }
  
  const calcMarginLeftInit = (carouselIndex) => {
    let widthNextButton = NEXT_BUTTON_WIDTH;
    if(window.getComputedStyle(document.querySelector(".next")).display === "none") {
      widthNextButton = 0;
    }
    return container.offsetWidth - listCardWidth[carouselIndex] - widthNextButton;
  }
  
  return {
    createCarousel: function() {
      carouselArray.forEach((array, index) => addCardToContainer(array, index));
    },
    setupCarousel: function() {
      if(cardWidth > MAX_CARD_WIDTH) cardWidth = MAX_CARD_WIDTH;
    
      const listCard = document.querySelectorAll(".card");
      listCard.forEach(element => (element.style.width = cardWidth + "px"));
    
      listCardWidth = carouselArray.map(
        (item, index) => (CARD_PADDING + cardWidth) * numOfCards[index]
      );
    
      carouselContainer.forEach(element => {
        let display = "none";
        if (
          window.matchMedia(`(min-width: ${DESKTOP_SCREEN_WIDTH}px)`).matches
        ) {
          display = "block";
        }
        Array.from(element.getElementsByTagName("a"))
          .forEach(ele => ele.style.display = display);
      })
    
      listCardContainer.forEach((item, index) => {
        item.style.width = listCardWidth[index] + "px";
      })
    
      let widthNextButton = NEXT_BUTTON_WIDTH;
      if (
        window.getComputedStyle(document.querySelector(".next")).display === "none"
      ) {
        widthNextButton = 0;
      }
      const marginLeftCarousels = listCardWidth.map(item => {
        let marginLeftValue = container.offsetWidth - item - widthNextButton;
        if (marginLeftValue > 0) marginLeftValue = 60;
        return marginLeftValue;
      });
    
      listCardContainer.forEach((item, index) => {
        item.style.marginLeft = marginLeftCarousels[index] + "px";
      })
    },
    moveRight: function(carouselIndex) {
      let newMarginLeft = calcNewMarginLeftValue(carouselIndex);
      listCardContainer[carouselIndex].style.marginLeft = newMarginLeft + "px";
    },
    moveLeft: function(carouselIndex) {
      let newMarginLeft = calcNewMarginLeftValue(carouselIndex, true);
      listCardContainer[carouselIndex].style.marginLeft = newMarginLeft + "px";
    },
    handleTouchEvent: function() {
      listCardContainer.forEach(item => {
        item.addEventListener('touchstart', (event) => {
          startX = event.changedTouches[0].clientX;
        });
        item.addEventListener('touchend', (event) => {
          endX = event.changedTouches[0].clientX;
          if(endX - startX > DISTANCE_OF_MOUSE_MOVE) moveRight(0);
          else moveLeft(0);
        })
      })
    },
    handleResizeEvent: function() {
      window.addEventListener("resize", () => {
        cardWidth = container.offsetWidth - MARGIN_LEFT;
        this.setupCarousel();
      });
      console.log("addddddddd")
    }
  }
} 
const carousel = buildCarousel();
carousel.createCarousel();
carousel.setupCarousel();
// handle touch event for carousel
carousel.handleTouchEvent();
//handle resize event for carousel
carousel.handleResizeEvent();
//handle control carousel
const moveLeft = (carouselIndex) => carousel.moveLeft(carouselIndex);
const moveRight = (carouselIndex) => carousel.moveRight(carouselIndex);
