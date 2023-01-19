import type { TMediaItem } from '../lib/types/TMediaItem';

import mediaFile from '../assets/img/icons/media-file.svg';
import mediaPic from '../assets/img/icons/media-pic.svg';
import mediaVisual from '../assets/img/icons/media-visual.svg';

export const mediaItems: TMediaItem[] = [
  {
    imgSrc: mediaFile,
    imgAlt: 'soubor',
    text: 'Tiskové zprávy',
    link: '',
  },
  {
    imgSrc: mediaPic,
    imgAlt: 'obrázek',
    text: 'Fotografie ke stažení',
    link: '',
  },
  {
    imgSrc: mediaVisual,
    imgAlt: 'deska na malování',
    text: 'Vizuál 2023',
    link: 'https://drive.google.com/drive/folders/1j9ad7MkIAUgtWpoTbrjcJCN5QQHbabYU',
  },
];
