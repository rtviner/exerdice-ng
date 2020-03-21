import { trigger, style, animation, animate, transition, useAnimation, keyframes } from '@angular/animations';

export const zoomInAnimation = animation(
  animate('.8s ease-out', keyframes([
    style({
      offset: 0,
      opacity: 0,
      transform: 'scale3d(0.3, 0.3, 0.3)'
    }),
    style({ 
      offset: .5,
      opacity: 1
    }),
])));

export const zoomIn = trigger('zoomIn', [
  transition('* => *', 
    useAnimation(zoomInAnimation)
  )
]);

export const blockInitialAnimation = trigger ("blockInitialAnimation", 
  [
    transition( ":enter", [])
  ]
);