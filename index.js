// ---

const by = (selector) => document.querySelector(selector);
const $typingText = by(".typing-text");
const $cursor = by(".cursor");

const words = ["Student", "Junior Frontend Developer", "Junior Backend Developer"];
const delay = {
  typing: 200,
  keeping: 1000,
  erasing: 100,
  word: 2000,
};

const sleep = (ms) => {
  return new Promise((resolve)=>setTimeout(()=> resolve(), ms));
}

const type = async (word) =>{
  $cursor.classList.add("typing");
  for(const char of word) {
    $typingText.textContent +=char;
    await sleep(delay.typing);
  }
  $cursor.classList.remove("typing");
  await sleep(delay.keeping);
  for(let i = 1; i <= word.length; i++) {
    $typingText.textContent= word.substring(0, word.length - i);
    await sleep(delay.erasing);
  }
}

const loop = async (wordIndex = 0) => {
  await type(words[wordIndex % words.length]);

  setTimeout(async () => {
    await loop(wordIndex + 1);
  }, delay.word);
}

document.addEventListener("DOMContentLoaded", () =>{
  loop();
});

const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

