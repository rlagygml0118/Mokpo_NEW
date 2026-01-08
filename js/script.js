//섹션 1 슬라이드
var sec1swiper = new Swiper(".sec_1_swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });


	// 섹션 2 슬라이드
	const sec2Swipers = [];

document.querySelectorAll('.sec_2_slide').forEach((el, index) => {
	sec2Swipers[index] = new Swiper(el, {
		slidesPerView: 2,
		spaceBetween: 23,

		scrollbar: {
			el: el.querySelector('.swiper-scrollbar'),
			hide: false,
		},

		breakpoints: {
			0: {          
				slidesPerView: 1,
			},
			768: {     
				slidesPerView: 1,
			},
			1024: {     
				slidesPerView: 2,
			}
		}
	});
});
	// 탭
	const sec2Tabs = document.querySelectorAll('.sec_2_tab li');
	const sec2Slides = document.querySelectorAll('.sec_2_slide');

	sec2Tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
		sec2Tabs.forEach(t => t.classList.remove('on'));
		sec2Slides.forEach(s => s.classList.remove('on'));

		tab.classList.add('on');
		sec2Slides[index].classList.add('on');

		sec2Swipers[index].update();
	});
});


// 섹션 3 슬라이드
const sec3Swiper = new Swiper('.sec_3_slide', {
  slidesPerView: 'auto',
    spaceBetween: 33,

    centeredSlides: false,

    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,

    scrollbar: {
      el: '.section_3 .swiper-scrollbar',
      hide: false,
    }
});

// 하트 아이콘
document.querySelectorAll('.section_3 .heart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        btn.classList.toggle('on');
    });
});


// 섹션4 슬라이드
const sec4Tabs = document.querySelectorAll('.sec_4_tab li');
const sec4Contents = document.querySelectorAll('.sec_4_content');

sec4Tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    sec4Tabs.forEach(t => t.classList.remove('on'));
    sec4Contents.forEach(c => c.classList.remove('on'));

    tab.classList.add('on');
    sec4Contents[index].classList.add('on');
  });
});


//섹션 5 슬라이드
var sec5swiper = new Swiper(".sec_5_swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });


//섹션 6 슬라이드
var sec6swiper = new Swiper(".sec_6_swiper", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      centeredSlides: false
    });
