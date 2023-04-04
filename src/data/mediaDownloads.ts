import type { TMediaItem } from '../lib/types/TMediaItem';

import mediaFile from '../assets/img/icons/media-file.svg';
import mediaVisual from '../assets/img/icons/media-visual.svg';
import tiskovaZprava from '../assets/pdf/TZ_Culturea_2023.pdf';

export const mediaItems: TMediaItem[] = [
  {
    imgSrc: mediaFile,
    imgAlt: 'soubor',
    text: 'Tiskové zprávy',
    link: tiskovaZprava,
  },
  {
    imgSrc: mediaVisual,
    imgAlt: 'deska na malování',
    text: 'Vizuál 2023',
    link: 'https://drive.google.com/drive/folders/1j9ad7MkIAUgtWpoTbrjcJCN5QQHbabYU',
  },
];
