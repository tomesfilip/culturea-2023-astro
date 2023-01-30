import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../../styles/swiper.css';

import type { THistoryItem } from '../../lib/types/THistoryItem';

const HistoryItem = ({ name, year, photos }: THistoryItem) => {
  return (
    <div className="w-full history-item">
      <p className="text-xl xl:text-[45px] uppercase xl:leading-[60px] font-headline">
        {name}
      </p>
      <p className="text-xl xl:text-[45px] font-bold xl:leading-[60px] font-headline">
        {year}
      </p>
      {photos && (
        <Swiper
          loop
          autoHeight={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="">
              <img
                className="object-contain object-center max-w[512px] max-h-[342px] px-4"
                src={photo}
                width={512}
                height={342}
                loading="lazy"
                alt={name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="my-4 dashed-border xl:my-8"></div>
    </div>
  );
};

export default HistoryItem;
