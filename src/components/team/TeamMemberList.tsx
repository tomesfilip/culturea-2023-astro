import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/swiper.css';

import type { TTeamMemberItem } from '../../lib/types/TTeamMemberItem';

interface Props {
  teamMembers: TTeamMemberItem[];
}

const TeamMemberList = ({ teamMembers }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoHeight={true}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {teamMembers.map((teamMember, index) => (
        <SwiperSlide key={index}>
          <figure className="flex flex-col justify-center mx-2 2xl:mx-8 text-center">
            <img
              className="object-cover object-center"
              src={teamMember.img}
              width={400}
              height={500}
              loading="lazy"
              alt={teamMember.name}
            />
            <figcaption className="py-2 text-lg font-bold text-white bg-flushOrange">
              <span className="mb-2 name">{teamMember.name}</span>
              <h4 className="mb-0 capitalize">{teamMember.position}</h4>
              <a className="block" href={`mailto:${teamMember.email}`}>
                {teamMember.email}
              </a>
              <a className="block" href={`tel:${teamMember.phone}`}>
                {teamMember.phone}
              </a>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamMemberList;
