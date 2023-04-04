import type { TPartnerItem } from '../lib/types/TPartnerItem';

import cestovatelskyObchod from '../assets/img/sponsors/cestovatelsky-obchod.webp';
import edo from '../assets/img/sponsors/edo.png';
import gsi from '../assets/img/sponsors/gsi.webp';
import isProdukce from '../assets/img/sponsors/is-produkce.jpeg';
import kiss from '../assets/img/sponsors/kiss.png';
import lyofood from '../assets/img/sponsors/lyofood.svg';
import smysluplneRozhovory from '../assets/img/sponsors/smysluplne-rozhovory-logo.png';
import zlinLuhacovice from '../assets/img/sponsors/zlin-luhacovice.png';
import zlin from '../assets/img/sponsors/zlin.svg';

export const partnerList: TPartnerItem[] = [
  {
    imgSrc: zlin,
    imgAlt: 'Zlín',
  },
  {
    imgSrc: cestovatelskyObchod,
    imgAlt: 'Cestovatelský obchod',
  },
  {
    imgSrc: edo,
    imgAlt: 'edo',
  },
  {
    imgSrc: gsi,
    imgAlt: 'gsi',
  },
  {
    imgSrc: isProdukce,
    imgAlt: 'is-produkce',
  },
  {
    imgSrc: lyofood,
    imgAlt: 'lyofood',
  },
  {
    imgSrc: smysluplneRozhovory,
    imgAlt: 'Smysluplné rozhovory',
  },
  {
    imgSrc: zlinLuhacovice,
    imgAlt: 'Zlín a Luhačovice',
  },
  {
    imgSrc: kiss,
    imgAlt: 'rádio Kiss',
  },
];
