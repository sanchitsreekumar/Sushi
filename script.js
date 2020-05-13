var tl = new TimelineMax();

tl.from('#plate', 2, { x: '-300', opacity: 0, ease: Power1.easeOut }, 0.3);
tl.from('#sushi1', 1, { y: '-300', opacity: 0, rotation: 20, ease: Bounce.easeOut }, 1);
tl.from('#sushi2', 1, { y: '-330', opacity: 0, rotation: -45, transformOrigin: '50% 50%', ease: Bounce.easeOut }, 1.2);
tl.from('#sushi4', 1, { y: '-300', opacity: 0, rotation: -45, transformOrigin: '50% 50%', ease: Bounce.easeOut }, 1.4);
tl.from('#sushi3', 1, { y: '-250', opacity: 0, rotation: 0, ease: Bounce.easeOut }, 1.6);
tl.from('#sauce', 1, { y: '-300', opacity: 0, rotation: 0, ease: Bounce.easeOut }, 2);
tl.from('#holder', 1, { y: '-500', opacity: 0, rotation: 0, ease: Bounce.easeOut }, 1.2);
tl.from('#chopstick1', 1, { y: '-500', opacity: 0, rotation: 20, transformOrigin: '50% 50%', ease: Bounce.easeOut }, 1.8);
tl.from('#chopstick2', 1, { y: '-600', opacity: 0, rotation: -70, transformOrigin: '50% 50%', ease: Bounce.easeOut }, 1.9);
tl.from('#Sushi', 2, { x: '-300', opacity: 0, rotation: 0, transformOrigin: '50% 50%', ease: Power1.easeOut }, 2.1);
tl.from('#bg1', 3, { x: '600', opacity: 0, ease: Back.easeOut }, 1.9);
tl.from('#bg2', 3, { x: '600', opacity: 0, ease: Back.easeOut }, 2.2);