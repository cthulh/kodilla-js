(function(){

  var flkty = new Flickity('.main-carousel', {
    cellAlign: 'center',
    contain: true,
    autoPlay: true,
    hash: true
  });

  // on click select that slide
  flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
    // if not clicked
    if ( !cellElement ) {
      return;
    }
    document.querySelector('.is-selected').classList.remove('is-selected');
    cellElement.classList.add('is-selected');
    // select clicked cell
    if ( typeof cellIndex == 'number' ) {
      flkty.selectCell( cellIndex );
    }
  });

}());
