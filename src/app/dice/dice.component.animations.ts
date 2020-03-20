import { trigger, style, animation, animate, transition, useAnimation, keyframes } from '@angular/animations';

export const wobbleAnimation = animation(
  animate('.8s ease-out', keyframes([
    style({ 
      offset: 0,
      transform: 'translateX(0)'
    }),
    style({ 
      offset: .15,
      transform: 'translateX(-25%) rotate3d(0,0,1,-5deg)'
    }),
    style({ 
      offset: .3,
      transform: 'translateX(20%) rotate3d(0,0,1,3deg)'
    }),
    style({ 
      offset: .45,
      transform: 'translateX(-15%) rotate3d(0,0,1,-3deg)'
    }),
    style({ 
      offset: .6,
      transform: 'translateX(10%) rotate3d(0,0,1,2deg)'
    }),
    style({ 
      offset: .75,
      transform: 'translateX(-5%) rotate3d(0,0,1,-1deg)'
    }),
    style({ 
      offset: 1,
      transform: 'translateX(0)'
    })
])));

export const diceWobble = trigger('wobble', [
  transition('* => *', 
    useAnimation(wobbleAnimation)
  )
]);

export const blockInitialAnimation = trigger ("blockInitialAnimation", 
  [
    transition( ":enter", [])
  ]
);

