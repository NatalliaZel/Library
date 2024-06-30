// Burger menu *************************************************

const menu = document.querySelector(".header-nav");
const menuBtn = document.querySelector(".header-burger");
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("header-nav")) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    !target.classList.contains("header-nav") &&
    !target.classList.contains("header-burger")
  ) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  }
});

menu.querySelectorAll(".header-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  });
});

menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Slider-Courusel ************************************

const carouselRow = document.querySelector(".courusel-row");
const carouselPrev = document.querySelector(".courusel-prev");
const carouselNext = document.querySelector(".courusel-next");
const slides = document.querySelectorAll(".courusel-img");
const paginationButtons = document.querySelectorAll(".courusel-item");
const paginationAreas = document.querySelectorAll(".courusel-area");

const slideWidth = slides[0].clientWidth;
const numVisibleSlides = 1;
let currentIndex = 0;

carouselPrev.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
  updatePagination();
});

carouselNext.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, slides.length - numVisibleSlides);
  updateCarousel();
  updatePagination();
});

function updateCarousel() {
  carouselRow.style.transform = `translateX(-${
    currentIndex * slideWidth + currentIndex * 25
  }px)`;
}

updateCarousel();

paginationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
    updatePagination();
  });
});

function updatePagination() {
  paginationButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add("courusel-item-active");
    } else {
      button.classList.remove("courusel-item-active");
    }
  });
}

paginationAreas.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
    updatePagination();
  });
});

updatePagination();

// Slider - Seasons ************************************//

const seasonInputs = document.querySelectorAll('input[name="season"]');
const bookCards = document.querySelectorAll(".book");

let animating = false;

seasonInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (animating) return;

    animating = true;
    const selectedSeason = input.value;

    bookCards.forEach((card) => {
      card.classList.remove("book-active");
      setTimeout(() => {
        card.style.opacity = "0";
      }, 20);
    });

    const selectedBook = document.querySelector(`.book-${selectedSeason}`);
    selectedBook.classList.add("book-active");

    setTimeout(() => {
      selectedBook.style.opacity = "1";
      animating = false;
    }, 20);
  });
});

// Открытие меню для регистрации или входа

const headerIconImg = document.querySelector(".header-icon-img");
const iconMenu = document.querySelector(".icon-menu");

function openIconMenu() {
  iconMenu.classList.toggle("icon-menu-active");
}

function closeIconMenu(event) {
  if (
    !iconMenu.contains(event.target) &&
    !headerIconImg.contains(event.target)
  ) {
    iconMenu.classList.remove("icon-menu-active");
    headerIconImg.addEventListener("click", () => {});
  }
}

headerIconImg.addEventListener("click", openIconMenu);

document.addEventListener("click", closeIconMenu);

// Открытие модального окна регистрации при нажатии на меню
const register = document.querySelector(".icon-register");
const iconMenuRegistration = document.querySelector(".icon-menu-registration");
const registerControls = document.querySelector(".register-controls");
const shaddow = document.querySelector(".shaddow");
const loginLink = document.querySelector(".login-link");

let registerFirstName = document.querySelector(".register-first-name");
let registerLastName = document.querySelector(".register-last-name");
let registerEmail = document.querySelector(".register-email");
let registerPassword = document.querySelector(".register-password");
let registerFirstNameValue = document.querySelector(
  ".register-first-name"
).value;
let registerLastNameValue = document.querySelector(".register-last-name").value;
let registerEmailValue = document.querySelector(".register-email").value;
let registerPasswordValue = document.querySelector(".register-password").value;

function showShaddow() {
  shaddow.classList.add("shaddow-active");
}

function hideShaddow() {
  shaddow.classList.remove("shaddow-active");
}

function openRegister() {
  register.classList.add("icon-register-active");
  iconMenu.classList.remove("icon-menu-active");
  showShaddow();
}

function closeRegister(event) {
  if (
    !register.contains(event.target) &&
    !iconMenuRegistration.contains(event.target) &&
    !buttonSignup.contains(event.target) &&
    !loginLink.contains(event.target)
  ) {
    register.classList.remove("icon-register-active");
    hideShaddow();
    registerForm.reset();
  }
}

iconMenuRegistration.addEventListener("click", openRegister);
registerControls.addEventListener("click", () => {
  register.classList.remove("icon-register-active");
  hideShaddow();
  registerForm.reset();
});

document.addEventListener("click", closeRegister);

// Открытие модального окна регистрации при нажатии на кнопку в library
const buttonSignup = document.querySelector(".button-signup");

buttonSignup.addEventListener("click", openRegister);

// Открытие модального окна LOGIN запись при нажатии на меню
const iconMenuProfile = document.querySelector(".icon-menu-profile");
const iconLogin = document.querySelector(".icon-login");
const shaddowLog = document.querySelector(".shaddow-log");
const loginControls = document.querySelector(".login-controls");
const loginEmail = document.querySelector(".login-email");
const loginPassword = document.querySelector(".login-password");
const registerLink = document.querySelector(".register-link");
const loginForm = document.querySelector(".login-form");

function showShaddowLog() {
  shaddowLog.classList.add("shaddow-active-log");
}

function hideShaddowLog() {
  shaddowLog.classList.remove("shaddow-active-log");
}

function openIconMenuLogin() {
  iconLogin.classList.add("icon-login-active");
  iconMenu.classList.remove("icon-menu-active");
  showShaddowLog();
}

function closeIconMenuLogin(event) {
  if (
    !iconLogin.contains(event.target) &&
    !iconMenuProfile.contains(event.target) &&
    !buttonLogin.contains(event.target) &&
    !bookButtonArray.some((button) => button.contains(event.target)) &&
    !registerLink.contains(event.target)
  ) {
    iconLogin.classList.remove("icon-login-active");
    hideShaddowLog();
    loginForm.reset();
  }
}

iconMenuProfile.addEventListener("click", openIconMenuLogin);
loginControls.addEventListener("click", () => {
  iconLogin.classList.remove("icon-login-active");
  hideShaddowLog();
  loginForm.reset();
});

document.addEventListener("click", closeIconMenuLogin);

// Открытие модального окна входа при нажатии на кнопку в library
const buttonLogin = document.querySelector(".button-login");

buttonLogin.addEventListener("click", openIconMenuLogin);

// Ограничение на пароль модального окна LOGIN запись
const passwordLoginError = document.querySelector(".password-login-error");
const password = loginPassword.value;

function checkLoginFieldsIsEmpty(emailOrCardNumber, password) {
  if (emailOrCardNumber === "" || password === "") {
    passwordLoginError.textContent = "Fill in all fields of the form!";
    return false;
  }
  return true;
}

function checkLoginPasswordIsCorrect(password) {
  if (password.length < 8) {
    passwordLoginError.textContent =
      "Password should be at least 8 characters!";
    return false;
  }
  return true;
}

// До регистрации все кнопки bue ведут к мод. окну входа в уч. запись

const bookButtons = document.querySelectorAll(".book-button");
const bookButtonArray = Array.from(bookButtons);
const iconWrap = document.querySelector(".icon-wrap");

bookButtonArray.forEach((button) => {
  button.addEventListener("click", () => {
    iconLogin.classList.add("icon-login-active");
    showShaddowLog();
  });
});

/*Появление панели в Digital на 10 сек. *******************/
const cardButton = document.querySelector(".card-button");
const registrationLibraryWrap = document.querySelector(
  ".registration-library-wrap"
);

function checkUserMatch(fullName, cardNumber) {
  const storedUsers = JSON.parse(localStorage.getItem("users"));

  if (!storedUsers || !Array.isArray(storedUsers)) {
    return false;
  }

  const matchingUser = storedUsers.find(
    (user) => user.fullName === fullName && user.cardNumber === cardNumber
  );

  if (matchingUser) {
    cardButton.style.display = "none";
    registrationLibraryWrap.style.display = "block";

    let identificatorsVisitsNumber = document.querySelector(
      ".identificators-visits-number"
    );
    let identificatorsBooksNumber = document.querySelector(
      ".identificators-books-number"
    );

    identificatorsVisitsNumber.textContent = matchingUser.visits.length + 1;
    identificatorsBooksNumber.textContent = matchingUser.books.length;

    console.log(matchingUser.visits.length + 1);
    console.log(matchingUser.books.length);

    setTimeout(() => {
      cardButton.style.display = "block";
      registrationLibraryWrap.style.display = "none";
      cardForm.reset();
    }, 10000);
  } else {
    cardForm.reset();
  }
}

cardButton.addEventListener("click", () => {
  const usernameCheck = document.querySelector(".username-check");
  const cardnumberCheck = document.querySelector(".cardnumber-check");
  const cardUsernameValue = usernameCheck.value.trim();
  const cardUsertelValue = cardnumberCheck.value.trim();
  checkUserMatch(cardUsernameValue, cardUsertelValue);
});

// Переход с окна ЛОГИН на окно РЕГИСТРАЦИИ
loginLink.addEventListener("click", () => {
  register.classList.add("icon-register-active");
  iconLogin.classList.remove("icon-login-active");
  hideShaddowLog();
  showShaddow();
  registerControls.addEventListener("click", () => {
    hideShaddowLog();
    registerForm.reset();
  });
});

// Переход с окна РЕГИСТРАЦИИ на окно ЛОГИН
registerLink.addEventListener("click", () => {
  register.classList.remove("icon-register-active");
  iconLogin.classList.add("icon-login-active");
  hideShaddow();
  showShaddowLog();
  loginControls.addEventListener("click", () => {
    hideShaddow();
    loginForm.reset();
  });
});

// Ограничение на пароль модального окна РЕГИСТРАЦИЯ
const passwordRegisterError = document.querySelector(
  ".password-register-error"
);

function checkRegisterFieldsIsEmpty(firstName, lastName, email, password) {
  if (firstName === "" || lastName === "" || email === "" || password === "") {
    passwordRegisterError.textContent = "Fill in all fields of the form!";
    return false;
  }
  return true;
}

function checkRegisterPasswordIsCorrect(password) {
  if (password.length < 8) {
    passwordRegisterError.textContent =
      "Password should be at least 8 characters!";
    return false;
  }
  return true;
}

function checkRegisterEmailIsCorrect(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    passwordRegisterError.textContent = "Enter a valid email!";
    return false;
  }
  return true;
}

// Окончание регистрации
const registerButton = document.querySelector(".register-button");
const registerForm = document.querySelector(".register-form");

const iconSymbols = document.querySelector(".icon-symbols");
const iconMenuLogin = document.querySelector(".icon-menu-login");
const iconMenuTitleLogin = document.querySelector(".icon-menu-title-login");
const iconMenuMyprofile = document.querySelector(".icon-menu-myprofile");

const myProfile = document.querySelector(".myprofile");
const shaddowMyProfile = document.querySelector(".shaddow-myprofile");
const myProfileControls = document.querySelector(".myprofile-controls");
const myprofileAvatarInner = document.querySelector(".myprofile-avatar-inner");
const myprofileNameInner = document.querySelector(".myprofile-name-inner");
const myProfileCardNumber = document.querySelector(".myprofile-cardnumber");
const myProfileIcon = document.querySelector(".myprofile-icon");

const cardUsername = document.querySelector(".card-username");
const cardUsertel = document.querySelector(".card-usertel");

const cardForm = document.querySelector(".card-form");
const buy = document.querySelector(".buy");
const shaddowBuy = document.querySelector(".shaddow-buy");
const buyControls = document.querySelector(".buy-controls");

const buyForm = document.querySelector(".buy-form");
const buyBanknum = document.querySelector(".buy-banknum");
const buyExp = document.querySelector(".buy-exp");
const buyExpFirst = document.querySelector(".buy-exp-first");
const buyExpSecond = document.querySelector(".buy-exp-second");
const buyCvc = document.querySelector(".buy-cvc");
const buyHolder = document.querySelector(".buy-holder");
const buyPostal = document.querySelector(".buy-postal");
const buyCity = document.querySelector(".buy-city");
const buyButton = document.querySelector(".buy-button");

const buyBanknumValue = buyBanknum.value;
const buyExpValue = buyExp.value;
const buyExpFirstValue = buyExpFirst.value;
const buyExpSecondValue = buyExpSecond.value;
const buyCvcValue = buyCvc.value;
const buyHolderValue = buyHolder.value;
const buyPostalValue = buyPostal.value;
const buyCityValue = buyCity.value;

const buyBanknumError = document.querySelector(".buy-banknum-error");
const buyExpError = document.querySelector(".buy-exp-error");
const buyCvcError = document.querySelector(".buy-cvc-error");

const myProfileList = document.querySelector(".myprofile-list");

const booksNumbers = document.querySelectorAll(".books-number");

let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

function saveUsersToLocalStorage(
  firstNameValue,
  lastNameValue,
  emailValue,
  passwordValue,
  cardNumber,
  capitalLetters,
  fullName
) {
  let user = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    password: passwordValue,
    cardNumber: cardNumber,
    capitalLetters: capitalLetters,
    fullName: fullName,
    books: [],
    visits: [],
    isBuyed: false,
    buttonsState: {
      1: "buy",
      2: "buy",
      3: "buy",
      4: "buy",
      5: "buy",
      6: "buy",
      7: "buy",
      8: "buy",
      9: "buy",
      10: "buy",
      11: "buy",
      12: "buy",
      13: "buy",
      14: "buy",
      15: "buy",
      16: "buy",
    },
  };
  localStorage.setItem("currentUser", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", JSON.stringify(true));
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

function closeRegisterAfterRegistration() {
  register.classList.remove("icon-register-active");
}

function hideShaddow() {
  shaddow.classList.remove("shaddow-active");
}

function closeheaderIconImg() {
  headerIconImg.classList.add("header-icon-disactive");
}

function getCapitalLetters(firstNameValue, lastNameValue) {
  let capitalLetters = `${firstNameValue[0].toUpperCase()}${lastNameValue[0].toUpperCase()}`;
  return capitalLetters;
}

function openIconWrap(capitalLetters) {
  iconWrap.classList.add("icon-wrap-active");
  iconSymbols.innerHTML = capitalLetters;
}

function createUniqCardNumber() {
  let cardNumber = Math.floor(Math.random() * 0x1000000000)
    .toString(16)
    .toUpperCase();
  return cardNumber;
}

function getFullName(firstNameValue, lastNameValue) {
  let fullName = `${firstNameValue} ${lastNameValue}`;
  return fullName;
}

function showIconWrapTitle(fullName) {
  iconWrap.addEventListener("mouseenter", () => {
    iconWrap.title = fullName;
  });
  iconWrap.addEventListener("mouseleave", () => {
    iconWrap.removeAttribute("title");
  });
}

function shangeProfileTitle(cardNumber) {
  iconMenuTitleLogin.classList.add("icon-menu-title-active");
  iconMenuTitleLogin.textContent = cardNumber;
}

function addCapitalLettersToMyporofile(capitalLetters) {
  myprofileAvatarInner.textContent = capitalLetters;
}

function addFullNameToMyporofile(fullName) {
  myprofileNameInner.textContent = fullName;
}

function addCardNumberToMyporofile(cardNumber) {
  myProfileCardNumber.textContent = cardNumber;
}

function copyToClickBoard() {
  myProfileIcon.addEventListener("click", function () {
    const textarea = document.createElement("textarea");
    textarea.value = myProfileCardNumber.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  });
}

function closeMyProfile(event) {
  if (
    !myProfile.contains(event.target) &&
    !iconMenuMyprofile.contains(event.target) &&
    !buttonMyprofile.contains(event.target)
  ) {
    myProfile.classList.remove("myprofile-active");
    shaddowMyProfile.classList.remove("shaddow-active-myprofile");
  }
}

function closeIconLogin() {
  bookButtonArray.forEach((button) => {
    button.addEventListener("click", () => {
      iconLogin.classList.remove("icon-login-active");
      shaddowLog.classList.remove("shaddow-active-log");
    });
  });
}

function openByForm() {
  bookButtonArray.forEach((button) => {
    button.addEventListener("click", () => {
      iconLogin.classList.remove("icon-login-active");
      shaddowLog.classList.remove("shaddow-active-log");
      buy.classList.add("buy-active");
      shaddowBuy.classList.add("shaddow-active-buy");
    });
  });
}

function closeByForm() {
  buyControls.addEventListener("click", () => {
    buy.classList.remove("buy-active");
    shaddowBuy.classList.remove("shaddow-active-buy");
  });
}

function closeByFormOutside(event) {
  if (
    !buy.contains(event.target) &&
    !bookButtonArray.some((button) => button.contains(event.target))
  ) {
    buy.classList.remove("buy-active");
    shaddowBuy.classList.remove("shaddow-active-buy");
  }
}

function isCorrectBankCardNumber() {
  const banknumValueNet = buyBanknum.value.replace(/\s+/g, "");
  if (!/^\d{16}$/.test(banknumValueNet)) {
    buyBanknumError.textContent = "Must contain exactly 16 digits!";
    isBuyFormValid = false;
  } else {
    buyBanknumError.textContent = "";
    isBuyFormValid = true;
  }
}

function isCorrectExpFirst() {
  const expFirstValueNet = buyExpFirst.value.replace(/\s+/g, "");
  if (!/^\d{2}$/.test(expFirstValueNet)) {
    buyExpError.textContent = "Must contain exactly 2 digits!";
    isBuyFormValid = false;
  } else {
    buyExpError.textContent = "";
  }
}

function isCorrectExpSecond() {
  const expSecondValueNet = buyExpSecond.value.replace(/\s+/g, "");
  if (!/^\d{2}$/.test(expSecondValueNet)) {
    buyExpError.textContent = "Must contain exactly 2 digits!";
    isBuyFormValid = false;
  } else {
    buyExpError.textContent = "";
    isBuyFormValid = true;
  }
}

function isCorrectCVC() {
  const cvcValueNet = buyCvc.value.replace(/\s+/g, "");
  if (!/^\d{3}$/.test(cvcValueNet)) {
    buyCvcError.textContent = "Must contain exactly 3 digits!";
    isBuyFormValid = false;
  } else {
    buyCvcError.textContent = "";
    isBuyFormValid = true;
  }
}

function countVisits(visit) {
  const visitsNumber = document.querySelectorAll(".visits-number");
  const visitsNumberArray = Array.from(visitsNumber);
  visitsNumberArray.forEach((item) => (item.textContent = visit));
}

function countBooks(book) {
  const booksNumberArray = Array.from(booksNumbers);
  booksNumberArray.forEach((item) => (item.textContent = book.length));
}

function submitBuyButton() {
  buy.classList.remove("buy-active");
  shaddowBuy.classList.add("shaddow-active-buy");
}

function closeBuyAfterPayment() {
  buy.classList.remove("buy-active");
}

function hideShaddowBuy() {
  shaddowBuy.classList.remove("shaddow-active-buy");
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const registerFirstNameValue = document
    .querySelector(".register-first-name")
    .value.trim();

  const registerLastNameValue = document
    .querySelector(".register-last-name")
    .value.trim();

  const registerEmailValue = document
    .querySelector(".register-email")
    .value.trim();

  const registerPasswordValue = document
    .querySelector(".register-password")
    .value.trim();

  const cardNumber = createUniqCardNumber();

  const capitalLetters = getCapitalLetters(
    registerFirstNameValue,
    registerLastNameValue
  );

  const fullName = getFullName(registerFirstNameValue, registerLastNameValue);

  if (
    !checkRegisterFieldsIsEmpty(
      registerFirstNameValue,
      registerLastNameValue,
      registerEmailValue,
      registerPasswordValue
    ) ||
    !checkRegisterPasswordIsCorrect(registerPasswordValue) ||
    !checkRegisterEmailIsCorrect(registerEmailValue)
  ) {
    return;
  }

  saveUsersToLocalStorage(
    registerFirstNameValue,
    registerLastNameValue,
    registerEmailValue,
    registerPasswordValue,
    cardNumber,
    capitalLetters,
    fullName
  );

  passwordRegisterError.textContent = "";
  closeRegisterAfterRegistration();
  hideShaddow();

  /*****/
  setTimeout(() => {
    location.reload();
  }, 600);
});

window.onload = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (isLoggedIn) {
    setUpAutorization();
  }
};

function setUpAutorization() {
  if (currentUser && isLoggedIn) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let registerFirstNameValue = currentUser["firstName"];
    let registerLastNameValue = currentUser["lastName"];
    let registerEmailValue = currentUser["email"];
    let registerPasswordValue = currentUser["password"];
    let cardNumber = currentUser["cardNumber"];
    let capitalLetters = currentUser["capitalLetters"];
    let fullName = currentUser["fullName"];
    let visits = currentUser["visits"].length + 1;
    let booksCounter = currentUser["books"].length;

    closeheaderIconImg();

    openIconWrap(capitalLetters);

    showIconWrapTitle(fullName);

    shangeProfileTitle(cardNumber);

    iconWrap.addEventListener("click", () => {
      iconMenuLogin.classList.toggle("icon-menu-login-active");
    });

    document.addEventListener("click", (event) => {
      if (
        !iconMenuLogin.contains(event.target) &&
        !iconWrap.contains(event.target)
      ) {
        iconMenuLogin.classList.remove("icon-menu-login-active");
      }
    });

    /*открытие модального окна My Profile *********************************/
    iconMenuMyprofile.addEventListener("click", openMyProfile);
    buttonMyprofile.addEventListener("click", openMyProfile);
    document.addEventListener("click", closeMyProfile);
    myProfileControls.addEventListener("click", () => {
      myProfile.classList.remove("myprofile-active");
      shaddowMyProfile.classList.remove("shaddow-active-myprofile");
    });

    /*Добавление инициалов в My Profile *********************************/
    addCapitalLettersToMyporofile(capitalLetters);

    /*Добавление фамилии и имени в My Profile ***************************/
    addFullNameToMyporofile(fullName);

    /*Добавление номера карты в My Profile *****************************/
    addCardNumberToMyporofile(cardNumber);

    /*Копирование номера карты в буфер обмена в My Profile **************/
    copyToClickBoard();

    /*Добавление количества визитов в My Profile **************/
    countVisits(visits);

    /*Изменение Digital card *********************************/
    changeDigitalArea();
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let currentUserBooks = currentUser.books;
    countBooks(currentUserBooks);
    changePlaceHolderAfterLogin();

    /*Изменение состояния кнопок ****************************/
    changeButtonStyles();
  }

  if (!currentUser.isBuyed === true) {
    openByForm();
    closeByForm();
    document.addEventListener("click", closeByFormOutside);
    buyBanknum.addEventListener("keyup", isCorrectBankCardNumber);
    buyExpFirst.addEventListener("keyup", isCorrectExpFirst);
    buyExpSecond.addEventListener("keyup", isCorrectExpSecond);
    buyCvc.addEventListener("keyup", isCorrectCVC);
  } else if (isLoggedIn && currentUser.isBuyed === true) {
    closeIconLogin();

    /*Выбор книг ***********************************************/
    const bookButtons = document.querySelectorAll(".book-button");
    const bookButtonArray = Array.from(bookButtons);
    const books = [
      "",
      "The Book Eaters, Sunyi Dean",
      "Cackle, Rachel Harrison",
      "Dante: Poet of the Secular Worlds, Erich Auerbach",
      "The Last Queen, Clive Irving",
      "The Body, Stephen King",
      "Carry: A Memoir of Survival on Stolen Land, Toni Jenson",
      "Days of Distraction, Alexandra Chang",
      "Dominicana, Angie Cruz",
      "Crude: A Memoir, Pablo Fajardo & ​​Sophie Tardy-Joubert",
      "Let My People Go Surfing, Yvon Chouinard",
      "The Octopus Museum: Poems, Brenda Shaughnessy",
      "Shark Dialogues: A Novel, Kiana Davenport",
      "Casual Conversation, Renia White",
      "The Great Fire, Lou Ureneck",
      "Rickey: The Life and Legend, Howard Bryant",
      "Slug: And Other Stories, Megan Milks",
    ];

    bookButtonArray.forEach(function (button) {
      button.addEventListener("click", function () {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const buttonId = button.getAttribute("data-id");
        const currentButtonState = currentUser.buttonsState[`${buttonId}`];
        const myProfileList = document.querySelector(".myprofile-list");

        let updatedUser = users.find(
          (user) => user.cardNumber === currentUser.cardNumber
        );

        if (updatedUser && currentButtonState === "buy") {
          currentUser.books.push(books[buttonId]);
          currentUser.buttonsState[`${buttonId}`] = "own";

          localStorage.setItem("currentUser", JSON.stringify(currentUser));

          updatedUser.buttonsState[`${buttonId}`] = "own";
          updatedUser.books.push(books[buttonId]);
          localStorage.setItem("users", JSON.stringify(users));
        }

        currentUser = JSON.parse(localStorage.getItem("currentUser"));

        currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let currentUserBooks = currentUser.books;
        countBooks(currentUserBooks);
        changeButtonStyles();
        /*setTimeout(() => {
          location.reload();
        }, 200);*/
      });
    });
  }
}

function completeBooksList() {
  let currentUserBooks = currentUser.books;
  myProfileList.innerHTML = "";
  const uniqueBooks = new Set();
  for (i = 0; i < currentUserBooks.length; i++) {
    const bookTitle = currentUserBooks[i];
    if (!uniqueBooks.has(bookTitle)) {
      let itemToPush = document.createElement("li");
      itemToPush.textContent = bookTitle;
      itemToPush.classList.add("myprofile-link");
      myProfileList.appendChild(itemToPush);
      uniqueBooks.add(bookTitle);
    }
  }
}

function changeButtonStyles() {
  bookButtonArray.forEach(function (button) {
    const buttonId = button.getAttribute("data-id");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const currentButtonState = currentUser.buttonsState[`${buttonId}`];
    if (currentButtonState === "own") {
      button.textContent = "own";
      button.classList.add("book-button-own");
      button.setAttribute("disabled", "true");
    }
  });
}

/* Работа с отправкой формы Buy ****************************************/
buyForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const buyBanknumValue = buyBanknum.value;
  const buyExpValue = buyExp.value;
  const buyExpFirstValue = buyExpFirst.value;
  const buyExpSecondValue = buyExpSecond.value;
  const buyCvcValue = buyCvc.value;
  const buyHolderValue = buyHolder.value;
  const buyPostalValue = buyPostal.value;
  const buyCityValue = buyCity.value;

  if (
    !isBuyFormValid ||
    buyBanknumValue === "" ||
    buyExpValue === "" ||
    buyExpFirstValue === "" ||
    buyExpSecondValue === "" ||
    buyCvcValue === "" ||
    buyHolderValue === "" ||
    buyPostalValue === "" ||
    buyCityValue === ""
  ) {
    event.preventDefault();
    return;
  } else {
    /*****/

    currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let updatedUser = users.find(
      (user) => user.cardNumber === currentUser.cardNumber
    );

    if (updatedUser) {
      updatedUser.isBuyed = true;
      localStorage.setItem("users", JSON.stringify(users));
    }

    if (isLoggedIn) {
      currentUser.isBuyed = true;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    submitBuyButton();
    buyForm.reset();
    buyBanknumError.textContent = "";
    buyExpError.textContent = "";
    buyCvcError.textContent = "";
    closeBuyAfterPayment();
    hideShaddowBuy();

    /*****/
    setTimeout(() => {
      location.reload();
    }, 600);
  }
});

// Авторизация пользователя при входе
const loginButton = document.querySelector(".login-button");
const buttonMyprofile = document.querySelector(".button-myprofile");
const libraryRegister = document.querySelector(".library-register");
const libraryLogin = document.querySelector(".library-login");

function changeDigitalArea() {
  libraryRegister.classList.add("library-register-disactive");
  libraryLogin.classList.add("library-login-active");
}

// Получаем пользователей из localStorage
let isAutorized = JSON.parse(localStorage.getItem("isAutorized"));

function loginUser(emailOrCardNumber, passwordValue) {
  let loginUser = users.find((user) => {
    return (
      (user.email === emailOrCardNumber ||
        user.cardNumber === emailOrCardNumber) &&
      user.password === passwordValue
    );
  });

  if (!loginUser) {
    passwordLoginError.textContent = "Not correct. Try again!";
  } else {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isAutorized", "true");

    loginUser.visits.push(1);
    localStorage.setItem("users", JSON.stringify(users));

    currentUser = loginUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
}

function openMyProfile() {
  myProfile.classList.add("myprofile-active");
  shaddowMyProfile.classList.add("shaddow-active-myprofile");
  iconMenuLogin.classList.remove("icon-menu-login-active");
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let currentUserBooks = currentUser.books;
  countBooks(currentUserBooks);
  completeBooksList();
}

function changePlaceHolderAfterLogin() {
  const cardUserNameLogin = document.querySelector(".digital-login-name");
  const cardUsertelLogin = document.querySelector(".digital-login-cardnumber");
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let nameDigital = currentUser["fullName"];
  let cardNumberDigital = currentUser["cardNumber"];
  cardUserNameLogin.placeholder = nameDigital;
  cardUsertelLogin.placeholder = cardNumberDigital;
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const loginEmailValue = document.querySelector(".login-email").value.trim();
  const loginPasswordValue = document
    .querySelector(".login-password")
    .value.trim();

  if (
    !checkLoginFieldsIsEmpty(loginEmailValue, loginPasswordValue) ||
    !checkLoginPasswordIsCorrect(loginPasswordValue)
  ) {
    return;
  }

  loginUser(loginEmailValue, loginPasswordValue);

  // ...
  setTimeout(() => {
    location.reload();
  }, 600);
});

// Пользователь выходит из кабинета
const iconMenuLogout = document.querySelector(".icon-menu-logout");
iconMenuLogout.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("isAutorized", "false");
  window.location.reload();
});
