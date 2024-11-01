document.addEventListener("DOMContentLoaded", () => {
	// Анимация при загрузке страницы
	const fadeElements = document.querySelectorAll(".fade-in");
	fadeElements.forEach((el) => {
		el.classList.add("visible");
	});

	const slideElements = document.querySelectorAll(".slide-in");
	slideElements.forEach((el) => {
		el.classList.add("show");
	});

	// Обработка формы контактов
	const contactForm = document.getElementById("contactForm");
	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const message = document.getElementById("message").value;

			console.log(`Имя: ${name}, Email: ${email}, Сообщение: ${message}`);
			alert("Ваше сообщение отправлено!");

			// Очистка формы
			contactForm.reset();
		});
	}

	// Слайдер для пожертвований
	const donationSlider = document.getElementById("donationSlider");
	const donationAmount = document.getElementById("donationAmount");
	if (donationSlider && donationAmount) {
		donationSlider.addEventListener("input", (e) => {
			donationAmount.textContent = e.target.value;
		});
	}

	// Обработка формы пожертвований
	const donationForm = document.getElementById("donationForm");
	if (donationForm) {
		donationForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const cardNumber = document.getElementById("cardNumber").value;
			const expirationDate =
				document.getElementById("expirationDate").value;
			const cvv = document.getElementById("cvv").value;

			console.log(
				`Номер карты: ${cardNumber}, Срок действия: ${expirationDate}, CVV: ${cvv}`
			);
			alert("Спасибо за ваше пожертвование!");

			// Очистка формы
			donationForm.reset();
		});
	}

	// События клавиатуры
	document.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			alert("Вы нажали Enter!");
		}
	});
});
