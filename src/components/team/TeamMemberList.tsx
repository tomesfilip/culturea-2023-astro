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
      {teamMembers.map((teamMember, index) => (
        <SwiperSlide key={index}>
          <figure className="flex flex-col justify-center mx-8 text-center">
            <img
              className="object-cover object-center"
              src={teamMember.img}
              width={400}
              height={500}
              alt={teamMember.name}
            />
            <figcaption className="py-2 text-lg font-bold text-white bg-flushOrange">
              <span className="mb-2 name">{teamMember.name}</span>
              <h4 className="mb-0 capitalize">{teamMember.position}</h4>
              <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamMemberList;
