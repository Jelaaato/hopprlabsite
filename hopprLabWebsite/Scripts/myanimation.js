var fadeIn = TweenMax.to('#webicon > img', .375, { opacity: 1 });

var scene = new ScrollMagic.Scene({
    triggerElement: "#web",
    triggerHook: "onEnter",
    reverse: true
})
.setTween(fadeIn)
//.duration(400)
.addTo(controller);