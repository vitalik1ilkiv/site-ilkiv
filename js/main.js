$(document).ready(function() {
	let position = 0;
	const slidesToShow = 4;
	const slidesToScroll = 2;
	const container = $('.slider-container');
	const track = $('.slider-track');
	const item = $('.slider-item');
	const btnPrev = $('.btn-prev');
	const btnNext = $('.btn-next');
	const itemCount = item.length;
	const itemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	item.each(function (index, item) {
		$(item).css({
			minWidth: itemWidth,
		});
	});

	btnNext.click(function(){
		const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	btnPrev.click(function(){
		const itemsLeft = Math.abs(position) / itemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});


	const setPosition = () => {
		track.css({
			transform: `translateX(${position}px)`
		});
	};

	const checkBtns = () => {
		btnPrev.prop('disabled', position === 0);
		btnNext.prop(
			'disabled',
			position <= -(itemCount - slidesToShow) * itemWidth
			);
	};

	checkBtns();
});


function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btn.innerHTML = "Read more";
		more.style.display = "none";
	} else {
		dots.style.display = "none";
		btn.innerHTML = "To hide";
		more.style.display = "inline";

	}
}

function readMoreTwo() {
	var dotsTwo = document.getElementById("dots__two");
	var moreTwo = document.getElementById("more__two");
	var btnTwo = document.getElementById("btn__two");

	if(dotsTwo.style.display === "none"){
		dotsTwo.style.display = "inline";
		btnTwo.innerHTML = "Read more";
		moreTwo.style.display = "none";
	} else {
		dotsTwo.style.display = "none";
		btnTwo.innerHTML = "To hide";
		moreTwo.style.display = "inline";

	}
}