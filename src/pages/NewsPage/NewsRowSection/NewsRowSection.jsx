import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LangContext } from '../../../containers/LangProvider';
import { NewsRow, SubscribeForm } from '../../../components';
import { getRequest, BASE_URI } from '../../../api';

const NewsRowSection = () => {
  const { state } = React.useContext(LangContext);
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchFirstPosts = async () => {
      const request = await getRequest(
        `${BASE_URI}/wp-json/tgi/v1/news-short?lang=${state.lang}`,
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
  const loadMore = async () => {
    const reqURI =
      data && data.nextPage
        ? `${data.nextPage}&lang=${state.lang}`
        : `${BASE_URI}/wp-json/tgi/v1/news-short?lang=${state.lang}`;

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
  const items = [];

  posts
    .slice(2)
    .reduce(
      (res, val, i, arr) => i % 2 === 0 && items.push(arr.slice(i, i + 2)),
      [],
    );
  return (
    <div className="container">
      <NewsRow key={9999} first data={posts.slice(0, 2)} />
      <SubscribeForm />
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={!!data.nextPage}
        loader={<div className="loader" key={0} />}
        scrollableTarget="page-wrap"
      >
        {items.map((pair, i) => (
          <NewsRow key={i} data={pair} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default NewsRowSection;
