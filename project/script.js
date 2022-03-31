const DESKTOP_SCREEN_WIDTH = 1024;
const BACKGROUND_COLOR = "#140327";

const fillBgColorHeader = () => {
  if (window.matchMedia(`(min-width: ${DESKTOP_SCREEN_WIDTH}px)`).matches) {
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

const carouselArrayData = [ 
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
    {
      imgHeader: "assets/images/carousel-1/image-3.jpg",
      HeartCount: 382,
      title: "BLISS TEXTURE",
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

const MARGIN_LEFT_MOBILE = 75;
const MARGIN_LEFT_DESKTOP = 60;
const NEXT_BUTTON_WIDTH = 150;
const MAX_CARD_WIDTH = 320;
const CARD_PADDING = 24;
const DISTANCE_OF_FINGER_MOVE = 20;

function buildCarousel (carouselArray) {
  const listCardContainer = document.querySelectorAll(".list-card");
  const container = document.querySelector(".carousel-section");
  const carouselContainer = document.querySelectorAll(".carousel-section");
  const numOfCards = carouselArray.map(item => item.length);
  let listCardWidth = [];
  let cardWidth = container.offsetWidth - MARGIN_LEFT_MOBILE;
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
  
      listCardContainer[index].innerHTML = 
        listCardContainer[index].innerHTML + html;
    });
  }

  const calcNextButtonWidth = (carouselIndex) => {
    let widthNextButton = NEXT_BUTTON_WIDTH;
    const nextBtn = carouselContainer[carouselIndex].querySelector(".next");
    if (
      window.getComputedStyle(nextBtn).display === "none"
    ) {
      widthNextButton = 0;
    }
    return widthNextButton;
  }
  
  const calcNewMarginLeftValue = (carouselIndex, isMoveLeft = false) => {
    const currentMarginLeft = 
    +listCardContainer[carouselIndex].style.marginLeft.replace("px", "");
    let temp = 1;
    if (isMoveLeft) temp = -1;
    let newMarginLeft = currentMarginLeft + (CARD_PADDING + cardWidth) * temp;
    
    if (isMoveLeft) {
      const marginLeftInit = calcMarginLeftInit(carouselIndex);
      if (newMarginLeft < marginLeftInit) return marginLeftInit;
    }
      
    if (newMarginLeft > 0) return 0;

    return newMarginLeft;
  }
  
  const calcMarginLeftInit = (carouselIndex) => {
    let widthNextBtn = calcNextButtonWidth(carouselIndex);
    return container.offsetWidth - listCardWidth[carouselIndex] - widthNextBtn;
  }
  
  return {
    createCarousel: function() {
      carouselArray.forEach((array, index) => addCardToContainer(array, index));
    },
    setupCarousel: function() {
      if (cardWidth > MAX_CARD_WIDTH) cardWidth = MAX_CARD_WIDTH;
    
      const listCard = document.querySelectorAll(".card");
      listCard.forEach(element => (element.style.width = cardWidth + "px"));
    
      listCardWidth = carouselArray.map(
        (item, index) => (CARD_PADDING + cardWidth) * numOfCards[index]
      );
    
      carouselContainer.forEach((container, index) => {
        let display = "none";
        if (
          listCardWidth[index] > container.offsetWidth &&
          window.matchMedia(`(min-width: ${DESKTOP_SCREEN_WIDTH}px)`).matches
        ) {
          display = "block";
        }
        Array.from(container.querySelectorAll("a.control"))
          .forEach(ele => ele.style.display = display);
      })
    
      listCardContainer.forEach((item, index) => {
        item.style.width = listCardWidth[index] + "px";
      })
    
      const marginLeftCarousels = listCardWidth.map((item, index) => {
        let marginLeftValue = 
          container.offsetWidth - item - calcNextButtonWidth(index);
        if (marginLeftValue > 0) return MARGIN_LEFT_DESKTOP;
        return marginLeftValue;
      });
    
      listCardContainer.forEach((item, index) => {
        item.style.marginLeft = marginLeftCarousels[index] + "px";
      })
    },
    moveCard: function(carouselIndex, isMoveLeft = false) {
      let newMarginLeft = calcNewMarginLeftValue(carouselIndex, isMoveLeft);
      listCardContainer[carouselIndex].style.marginLeft = newMarginLeft + "px";
    },
    handleTouchEvent: function() {
      listCardContainer.forEach((item, index) => {
        item.addEventListener('touchstart', (event) => {
          startX = event.changedTouches[0].clientX;
        });
        item.addEventListener('touchend', (event) => {
          endX = event.changedTouches[0].clientX;
          if (endX - startX > DISTANCE_OF_FINGER_MOVE) this.moveCard(index);
          else this.moveCard(index, true);
        })
      })
    },
    handleResizeEvent: function() {
      window.addEventListener("resize", () => {
        cardWidth = container.offsetWidth - MARGIN_LEFT_MOBILE;
        this.setupCarousel();
      });
    }
  }
} 

const carousel = buildCarousel(carouselArrayData);
carousel.createCarousel();
carousel.setupCarousel();
// handle touch event for carousel
carousel.handleTouchEvent();
//handle resize event for carousel
carousel.handleResizeEvent();
//handle control carousel
const moveLeft = (carouselIndex) => carousel.moveCard(carouselIndex, true);
const moveRight = (carouselIndex) => carousel.moveCard(carouselIndex);