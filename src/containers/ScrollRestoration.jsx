import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';

class ScrollRestoration extends Component {
  static propTypes = {
    location: PropTypes.object,
  };
  state = {
    // prevPageYPos: null,
    scrollY: 0,
  };
  // prevPageYPos = 0;
  componentDidMount() {
    document
      .getElementById('page-wrap')
      .addEventListener('scroll', this.debouncedUpdateScroll);
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    // optional
    // window.scrollTo(0, 0);
  }
  // getSnapshotBeforeUpdate() {
  //   if (this.props.history.action === 'PUSH') {
  //     return document.getElementsByTagName('main')[0].getBoundingClientRect()
  //       .top;
  //   }
  //   return null;
  // }
  componentDidUpdate(prevProps, prevState) {
    // console.log(snapshot);
    // if (snapshot !== null && snapshot > 0) {
    //   this.prevPageYPos = snapshot;
    //   window.scrollTo(0, 0);
    // } else if (snapshot === null) {
    //   setTimeout(() => {
    //     window.scrollTo(0, this.prevPageYPos);
    //   }, 1000);
    // }
    if (this.props.location.key !== prevProps.location.key) {
      const { key } = this.props.location;
      const top = window.sessionStorage.getItem(key);

      if (
        top &&
        document.getElementById('page-wrap').getBoundingClientRect().top >= top
      ) {
        setTimeout(() => {
          document.getElementById('page-wrap').scrollTo({
            top,
            // behavior: 'smooth',
          });
        }, 1000);
      }
    }
    if (prevState.scrollY !== this.state.scrollY) {
      window.sessionStorage.setItem(
        this.props.location.key,
        this.state.scrollY,
      );
    }
  }
  updateScroll = () => {
    const scrollY = document.getElementById('page-wrap').getBoundingClientRect()
      .top;

    this.setState({ scrollY: Math.abs(scrollY) });
  };
  debouncedUpdateScroll = debounce(300, this.updateScroll);
  render() {
    return null;
  }
}

export default withRouter(ScrollRestoration);
