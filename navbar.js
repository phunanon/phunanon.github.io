//Q: If I love TypeScript so much, why am I not using it?
//A: Because I need to torture myself every once in a while to stay humble.

//Q: Why are you doing this as JavaScript at all?
//A: Because I can't be bothered to generate actual static pages,
//   so including this on each page is easiest.

window.addEventListener('load', function () {
  const pages = [
    ['/', 'Résumé'],
    ['/career', 'Career Portfolio'],
    ['/hobby', 'Hobby Portfolio'],
  ];
  const navbar = document.createElement('nav');
  navbar.innerHTML = pages
    .map(([href, text]) => `<a href="${href}" class="navbar-item">${text}</a>`)
    .join('');
  document.body.prepend(navbar);
});
