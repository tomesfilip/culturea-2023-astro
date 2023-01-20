import type { TTeamMemberItem } from '../lib/types/TTeamMemberItem';

import imgAlzbetaBlahova from '../assets/img/team/alzbeta-blahova.webp';
import imgAndreaZylova from '../assets/img/team/andrea-zylova.webp';
import imgHelenaPham from '../assets/img/team/helena-pham.webp';
import imgLucieMakovska from '../assets/img/team/lucie-makovska.webp';
import imgSimonValovic from '../assets/img/team/simon-valovic.webp';
import imgTerezaSimova from '../assets/img/team/tereza-simova.webp';
import imgVendulaKorinkova from '../assets/img/team/vendula-korinkova.webp';

export const teamMemberItems: TTeamMemberItem[] = [
  {
    id: 0,
    name: 'Lucie Makovská',
    position: 'hl. manažer',
    email: 'ahoj@culturea.cz',
    img: imgLucieMakovska,
  },
  {
    id: 1,
    name: 'Andrea Žylová',
    position: 'hl. manažer',
    email: 'ahoj@culturea.cz',
    img: imgAndreaZylova,
  },
  {
    id: 2,
    name: 'Alžběta Blahová',
    position: 'manažerka PR',
    email: 'pr@culturea.cz',
    img: imgAlzbetaBlahova,
  },
  {
    id: 3,
    name: 'Vendula Kořínková',
    position: 'manažerka Fundraisingu',
    email: 'fundraising@culturea.cz',
    img: imgVendulaKorinkova,
  },
  {
    id: 4,
    name: 'Helena Pham',
    position: 'manažerka Proma',
    email: 'promo@culturea.cz',
    img: imgHelenaPham,
  },
  {
    id: 5,
    name: 'Tereza Šímová ',
    position: 'manažerka Produkce',
    email: 'produkce@culturea.cz',
    img: imgTerezaSimova,
  },
  {
    id: 6,
    name: 'Šimon Valovič',
    position: 'manažer Artu',
    email: 'art@culturea.cz',
    img: imgSimonValovic,
  },
  // {
  // id: 7,
  //   name: 'Sára Mašková',
  //   position: '',
  // email: '',
  //   img: imgSimonValovic,
  // },
];
