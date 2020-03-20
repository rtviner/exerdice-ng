import { trigger, style, animation, animate, transition, useAnimation, keyframes } from '@angular/animations';

export const pulseAnimation = animation(
  animate('.5s ease-out', keyframes([
    style({
      offset: 0,
      transform: 'scale3d(1,1,1)'
    }),
    style({ 
      offset: .5,
      transform: 'scale3d(1.05, 1.05, 1.05)'
    }),
    style({ 
      offset: 1,
      transform: 'scale3d(1,1,1)'
    })
])));

export const pulse = trigger('pulse', [
  transition('* => *', 
    useAnimation(pulseAnimation)
  )
]);

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


