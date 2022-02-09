'use strict';

const adv = document.querySelector('.adv');
const books = document.querySelectorAll('.book');
const linkBook = books[4].querySelector('h2 > a')
const chapterTwoList = books[0].querySelectorAll('li');
const bookFiveList = books[5].querySelectorAll('li');
const bookSixList = books[2].querySelectorAll('li');
const ul = books[2].querySelector('ul');
const chapterFromSix = bookSixList[2].cloneNode();

books[0].before(books[1]);
books[2].before(books[4]);
books[3].after(books[2]);
books[5].after(books[2]);
adv.remove();
linkBook.textContent = "Книга 3. this и Прототипы Объектов";
chapterTwoList[10].before(chapterTwoList[2])
chapterTwoList[3].after(chapterTwoList[6]);
chapterTwoList[6].after(chapterTwoList[8]);
bookFiveList[3].before(bookFiveList[9]);
bookFiveList[4].after(bookFiveList[2]);
bookFiveList[7].after(bookFiveList[5]);
chapterFromSix.innerHTML = "Глава 8: За пределами ES6";
ul.append(chapterFromSix);
bookSixList[8].after(chapterFromSix);
