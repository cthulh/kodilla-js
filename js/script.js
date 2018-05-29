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
      flkty.select( cellIndex );
    }
  });

  //progress bar
  var progressBar = document.querySelector('.progress-bar');
  flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });

  //restart button resets to slide of index 0
  var restartBtns = document.querySelectorAll(".restart-button");
  restartBtns.forEach(function(btn){
    console.log(btn);
    btn.onclick = function(){
      flkty.select(0);
      console.log("Reset!");
    };
  });
}());
