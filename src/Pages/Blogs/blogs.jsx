import React from 'react';
import style from './blogs.module.css';
import Page from '../../Components/Page/page';
import Section from '../../Components/Section/section';
import SmallestTitle from '../../Components/SmallestTitle/smallesttitle';
import Title from '../../Components/Title/title';
import Button from '../../Components/Button/button';
import placeholder from '../../Components/Card/placeholder.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '../../Components/Card/card';
import SecondaireButton from '../../Components/Button/secondairebutton';


const Blogs = () => {
    return (
      <Page>
        <Section customClass={style.swiperSection}>
          <Swiper
            style={{
              '--swiper-pagination-color': '#0D1B2A',
            }}
            slidesPerView={1}
            spaceBetween={100}
            pagination={{ clickable: true }}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            className={style.mySwiper}
          >

            <SwiperSlide className={style.swiperSlide}>
              <div className={style.swiperSlideText}>
                <SmallestTitle>Featured</SmallestTitle>
                <Title>Lorem ipsum dolor sit amet, consetetur</Title>
                <p>
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <SecondaireButton>Lees verder</SecondaireButton>
              </div>
              <img src={placeholder} alt='blogpost' className={style.swiperSlideImg}/>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide}>
              <div className={style.swiperSlideText}>
                <SmallestTitle>Featured</SmallestTitle>
                <Title>Lorem ipsum dolor sit amet, consetetur</Title>
                <p>
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <SecondaireButton>Lees verder</SecondaireButton>
              </div>
              <img src={placeholder} alt='blogpost' className={style.swiperSlideImg}/>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide}>
              <div className={style.swiperSlideText}>
                <SmallestTitle>Featured</SmallestTitle>
                <Title>Lorem ipsum dolor sit amet, consetetur</Title>
                <p>
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <SecondaireButton>Lees verder</SecondaireButton>
              </div>
              <div className={style.swiperSlideImg}>
                <img src={placeholder} alt='blogpost' />
              </div>

            </SwiperSlide>
          </Swiper>
        </Section>

        <Section customClass={style.sectionFlex}>
          <Title customClass={style.titleBlog}>Recente Blog Posts</Title>
          <div className={style.blogCards}>
            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />

            <Card
            title={'Lorem Ipsum Dolor Sit Amet, Consetetur'}
            children={'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
            date={'30/10/2024'}
            />
          </div>
            
            <Button>Laad meer</Button>

        </Section>
      </Page>
    );
};

export default Blogs;