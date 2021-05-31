'use strict';
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 5000
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


});
const tabs = document.querySelectorAll(`.catalog__tab`),
	catalog = document.querySelectorAll(`.catalog__content`),
	catalogItem = document.querySelectorAll(`.catalog-item`),
	modalButton = document.querySelectorAll(`[data-modal="consultation"]`),
	buyButton = document.querySelectorAll(`[data-modal="buy"]`),
	overlay = document.querySelector(`.overlay`),
	modalConsultation = overlay.querySelector(`#consultation`),
	modalOrder = overlay.querySelector(`#order`),
	modalThanks = overlay.querySelector(`#thanks`),
	form = document.querySelectorAll(`.feed-form`),
	upBtn = document.querySelector(`.up-button`);
catalog[0].classList.add(`catalog__content_active`);



tabs.forEach((item, index) => {
	item.addEventListener(`click`, () => {
		tabs.forEach(item => {
			item.classList.remove(`catalog__tab_active`);
			catalog.forEach(item => {
				item.classList.remove(`catalog__content_active`);
			});
			catalog[index].classList.add(`catalog__content_active`);

		});
		item.classList.add(`catalog__tab_active`);
	});
});

catalogItem.forEach(item => {
	item.addEventListener(`click`, (e) => {
		if (e.target.classList.contains(`catalog-item__link`) || e.target.classList.contains(`catalog-item__back`)) {
			e.preventDefault();
			item.querySelector(`.catalog-item__content`).classList.toggle(`catalog-item__content_active`);
			item.querySelector(`.catalog-item__about`).classList.toggle(`catalog-item__about_active`);
		}
	});
});

modalButton.forEach(item => {
	item.addEventListener(`click`, e => {
		dispalyOn(modalConsultation);
	});
});

buyButton.forEach(item => {
	item.addEventListener(`click`, e => {
		let modalSubtitle = modalOrder.querySelector(`.modal__descr`);
		let catalogName = item.closest(`.catalog-item`).querySelector(`.catalog-item__subtittle`);
		modalSubtitle.innerText = catalogName.textContent;
		dispalyOn(modalOrder);
	});
});

form.forEach(item => {
	item.addEventListener(`submit`, e => {
		e.preventDefault();
		document.querySelectorAll(`.modal_active`).forEach(item => {
			item.classList.remove(`modal_active`);
		});
		dispalyOn(modalThanks);

	});
});

document.addEventListener(`keydown`, e => {
	if (e.keyCode == 27) {
		let activeModal = overlay.querySelector(`.modal_active`);
		dispalyClose(activeModal);
	}
});

function dispalyOn(itemModal) {
	overlay.style.display = `block`;
	itemModal.classList.add(`modal_active`);
	itemModal.addEventListener(`click`, closeItem => {
		let closeItemClass = closeItem.target.classList;
		for (let i = 0; i < closeItemClass.length; i++) {
			if (closeItemClass[i] == `fa-times`) {
				if (itemModal.classList.contains(`modal_mini`)) {
					dispalyClose(itemModal, true);
				} else {
					dispalyClose(itemModal);
				}
			}
		}
	});

}

function dispalyClose(itemModal, reload = false) {
	if (itemModal) {
		overlay.style.display = `none`;
		itemModal.classList.remove(`modal_active`);
		if (reload) {
			window.location.reload();
		}
	}
}
window.addEventListener(`scroll` , e=>{
	if (window.pageYOffset > 700) {
		upBtn.classList.add (`up-button_active`);
	}
	else {
		upBtn.classList.remove(`up-button_active`);
	}
})