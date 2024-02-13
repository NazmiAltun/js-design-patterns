import { baker } from './staff.mjs';

export const oven = {
  makeCupCake(toppings) {
    baker.bake('cupcake', toppings);
  },
  makeMuffin(mSize) {
    baker.bake('muffin', mSize);
  },
};
