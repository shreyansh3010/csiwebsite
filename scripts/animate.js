//tween = new TweenMax(".svg_rotate",5, {rotation:360, transformOrigin:"50% 50%"});

var tl = new TimelineMax({onComplete:onRepeat})


tl.to(".svg_rotate", .1, {rotation:"+=1",transformOrigin:"50% 50%",scale:0.5})

function onRepeat() {
  tl.invalidate().restart()
}

function randomScale(type){
  if (type === 'x') {
    return 1.2 // return a randomised X value
  } else {
    return 1.3 // return a randomised Y value
  }
}


