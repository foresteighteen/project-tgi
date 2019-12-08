import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Slider from 'react-slick';
import { Waypoint } from 'react-waypoint';
import { RevealByWord } from '../../../containers/Animations';
import { NewsItem } from '../../../components';
import { LangContext } from '../../../containers/LangProvider';

import { getRequest } from '../../../api';

import SliderArrows from '../SliderArrows';
import './NewsSection.sass';

const NewsSection = ({ data: { title } }) => {
  const { state } = React.useContext(LangContext);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [animate, play] = React.useState(false);

  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  const sliderRef = React.useRef(null);

  React.useEffect(() => {
    const fetchFirstPosts = async () => {
      const request = await getRequest(
        `https://tgi.thelegacy.com.ua/wp-json/tgi/v1/news-short?lang=${state.lang}&count=4`,
      );
      if (!request.success) {
        setError(request.error);
      } else {
        setData(request.data);
        setLoaded(true);
      }
    };
    fetchFirstPosts();
  }, [state.lang]);

  const revealSpring = useSpring({
    opacity: animate ? 1 : 0,
    // transform: animate ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25%, 0)',
    transform: animate
      ? 'matrix(1, 0, 0, 1, 0, 0)'
      : 'matrix(1, 0, 0, 1.4, 0, 280)',
    config: config.slow,
  });

  const loadMore = async () => {
    const reqURI =
      data && data.nextPage
        ? `${data.nextPage}&lang=${state.lang}`
        : `https://tgi.thelegacy.com.ua/wp-json/tgi/v1/news-short?lang=${state.lang}`;

    if (!reqURI) return;

    const { data: reqData, success } = await getRequest(reqURI);
    if (success) {
      setData({
        nextPage: reqData.nextPage,
        posts: [...data.posts, ...reqData.posts],
      });
    }
  };

  if (!loaded) return null;
  const { posts } = data;

  const renderNews = item => (
    <NewsItem
      className="news__item"
      key={item.id}
      lang={state.lang}
      {...item}
    />
  );
  const sliderOptions = {
    arrows: false,
    slidesToShow: 2,
    infinite: false,
    lazyLoad: true,
    swipe: false,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: current => {
      if (current + 3 >= posts.length && !!data.nextPage) {
        loadMore();
      }
    },
    responsive: [
      {
        breakpoint: 1639,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="news">
      <Waypoint
        onEnter={() => play(true)}
        onLeave={() => play(false)}
        bottomOffset="35%"
        scrollableAncestor={document.getElementById('#page-wrap')}
      >
        <div className="container left-offset">
          <div className="news__header">
            <h2 className="news__title">
              <RevealByWord>{title}</RevealByWord>
            </h2>
            <SliderArrows
              onClickPrev={() => {
                sliderRef.current.slickPrev();
              }}
              onClickNext={() => {
                sliderRef.current.slickNext();
              }}
              activeSlide={activeSlide}
              sliderLength={posts.length}
            />
          </div>
          <animated.div style={revealSpring}>
            <Slider ref={sliderRef} className="news__list" {...sliderOptions}>
              {posts.map(renderNews)}
              <div></div>
            </Slider>
          </animated.div>
        </div>
      </Waypoint>
    </section>
  );
};

const InView = ComposedComponent => props => {
  const [show, set] = React.useState(false);
  return (
    <Waypoint
      onEnter={() => {
        if (!show) set(true);
      }}
      bottomOffset="-20%"
      scrollableAncestor={document.getElementById('#page-wrap')}
    >
      {show ? (
        <ComposedComponent {...props} />
      ) : (
        <div style={{ width: '100%', height: '500px' }}></div>
      )}
    </Waypoint>
  );
};

export default InView(NewsSection);
