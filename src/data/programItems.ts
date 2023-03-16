import type { TProgramItem } from '../lib/types/TProgramItem';

import dobesImg from '../assets/img/program/dobes.png';
import gombaImg from '../assets/img/program/gomba.png';
import kovarImg from '../assets/img/program/kovar.png';
import misikovaImg from '../assets/img/program/misikova.png';
import mlynarImg from '../assets/img/program/mlynar.png';
import sebastianImg from '../assets/img/program/sebestian1.png';
import svaricekImg from '../assets/img/program/svaricek.png';

export const programItems: TProgramItem[] = [
  {
    time: '12:30',
    headline: 'Soutěž ve stavění lega',
  },
  {
    time: '13:00',
    headline: 'Země štěstí, draků a falů',
    presenter: 'Rudolf Švaříček',
    imgSrc: svaricekImg,
  },
  {
    time: '14:10',
    headline: 'Jak jsem (pře)žil erasmus v Dánsku',
    presenter: 'Matěj Kovář',
    imgSrc: kovarImg,
  },
  {
    time: '15:20',
    headline: 'Stopování jako životní styl',
    presenter: 'Šebastian Bok',
    imgSrc: sebastianImg,
  },
  {
    time: '16:30',
    headline: 'Dánském pěšky',
    presenter: 'Kateřina Misiková',
    imgSrc: misikovaImg,
  },
  {
    time: '17:40',
    headline: 'Bhútán, jak ho turista nezná',
    presenter: 'Pavla Gomba',
    imgSrc: gombaImg,
  },
  {
    time: '18:50',
    headline: '10denní stopovací akce po Evropě',
    presenter: 'Mára Mlynář a Maty Dobeš',
    imgSrc: mlynarImg,
  },
  {
    time: '20:00 - 02:00',
    headline: 'AFTERPARTY',
    place: 'Café 204 Zlín',
  },
];

export const extraProgramItems: TProgramItem[] = [
  {
    time: '5. 4. 2023 v 18:00',
    headline: 'Workshop malování Hennou',
    place: 'Café 204 Zlín',
  },
];
