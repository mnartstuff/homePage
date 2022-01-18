(function(){

  const mainLinks = document.querySelectorAll('.main-link');
  const modal = document.querySelector('.modal');
  const modalMenu = document.querySelector('.modal-menu');

  for(const link of mainLinks) {
    link.addEventListener('click', () => {
      for(const all of mainLinks) {
        all.classList.add('faded');
      }
      modal.classList.add('show-modal');
  const thisClass = event.srcElement.id;
  const theseLinks = document.querySelectorAll(`.${thisClass}`);
  for (const eachLink of theseLinks) {
    eachLink.classList.add('show-tile');
  }
    });
  }

  modal.addEventListener('click', (e) => {

    const tiles = document.querySelectorAll('.tile');
    if (e.target !== e.currentTarget)
    return;

      modal.classList.remove('show-modal');

      for (const tile of tiles) {
        tile.classList.remove('show-tile');
      }
      for (const link of mainLinks) {
        link.classList.remove('faded');
      }

  });
  
}());
