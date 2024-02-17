const slides = [
    {
      image: 'slide1.jpg',
      tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
    },
    {
      image: 'slide2.jpg',
      tagLine:
        'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
    },
    {
      image: 'slide3.jpg',
      tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
    },
    {
      image: 'slide4.png',
      tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
    },
  ];
  
  let img = document.querySelector('.banner-img');
  let tagLine = document.querySelector('p');
  let dotsContainer = document.querySelector('.dots');
  let arrowLeft = document.getElementById('arrowLeft');
  let arrowRight = document.getElementById('arrowRight');
  
  let indexSlide = 0;
  
  arrowRight.addEventListener('click', () => updateSlide(++indexSlide));
  arrowLeft.addEventListener('click', () => updateSlide(--indexSlide));
  
  function updateSlide(index) {
    index = (index + slides.length) % slides.length;
    const slide = slides[index];
    img.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;
  
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => dot.classList.toggle('dot_selected', i === index));
  }
  
  slides.forEach(() => {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
  });
  
  updateSlide(0