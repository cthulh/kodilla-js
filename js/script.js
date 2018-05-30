(function(){
  // -------------------- mustache
  // data for slide template
  var addOns = {
    resetBtn: "<button class=\"restart-button\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></button>"
  };

  var data = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Foggy forest in the Valley"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/119564/pexels-photo-119564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Dark Peaks",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Winter is Coming in the Mountains",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Sunny Snowy Peaks",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/6718/mountains-clouds-forest-trees.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Foggy Forest",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Coulds and the Peaks",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Fog and the Forest",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Fjords",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/15382/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Unchallanged Territory",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 10,
      image: "https://images.pexels.com/photos/414459/pexels-photo-414459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Sunny day at the top",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 11,
      image: "https://images.pexels.com/photos/629159/pexels-photo-629159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "Sketchy Roads",
      buttonAddOn: addOns.resetBtn
    },
    {
      id: 12,
      image: "https://images.pexels.com/photos/371649/pexels-photo-371649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat autem ratione sint nostrum molestias laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corporis similique consectetur voluptates magni saepe sit ipsam, minima adipisci porro quia error ad, fugiat cum ducimus doloribus dolorem? Vitae asperiores ab laboriosam nisi hic impedit pariatur, blanditiis debitis minus vero nostrum eos officiis, tempore eligendi et, deserunt tempora, voluptates sequi.",
      title: "In the distance",
      buttonAddOn: addOns.resetBtn
    }
  ]

  // template
  var tempSlide = document.getElementById("slide").innerHTML;
  console.log(tempSlide);
  Mustache.parse(tempSlide);
  console.log(tempSlide);
  var slides = Mustache.render(tempSlide, {data});
  console.log(slides);
  var carousel = document.querySelector(".main-carousel");
  console.log(carousel);
  carousel.insertAdjacentHTML("beforeend", slides);

  // -------------------- flickity
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
