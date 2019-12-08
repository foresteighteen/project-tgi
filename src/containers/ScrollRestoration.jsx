import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export const ScrollContext = React.createContext({ restoreScroll: () => null });

let scrollData = {};

// TODO: move logic to cDU instead of gSBU if possible
class ScrollRestoration extends Component {
  // save scrollTop position to page location pathname before updating
  scrollToSupport = true;

  componentDidMount() {
    const testElement = document.getElementById('page-wrap');
    if (testElement.scrollTo === undefined) {
      this.scrollToSupport = false;
    }
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      history: { action },
      location: { pathname },
    } = prevProps;

    if (action !== 'POP') {
      scrollData = {
        ...scrollData,
        [pathname]: document.getElementById('page-wrap').scrollTop,
      };
    }
    return null;
  }
  // gSBU doesn't work without cDU
  componentDidUpdate() {
    return null;
  }
  restoreScroll = () => {
    if (!this.scrollToSupport) return;
    const {
      history: { action },
      location: { pathname },
    } = this.props;
    const scrolledArea = document.getElementById('page-wrap');

    if (action === 'POP') {
      // test pathname with followed regexr to make only MainPage(/ru|/en)
      // wait 500ms to prevent animation bugs !!!(animations not firing right away...
      // ...because of that they'll stuck untill WAYPOINT of section is reached)!!!
      if (scrollData[pathname]) {
        setTimeout(
          () =>
            scrolledArea.scrollTo({
              left: 0,
              top: scrollData[pathname],
              behavior: 'smooth',
            }),
          /^\/(en|ru)$/g.test(pathname) ? 500 : 0,
        );
      } else {
        setTimeout(scrolledArea.scrollTo({ left: 0, top: 0 }));
      }
    } else {
      setTimeout(scrolledArea.scrollTo({ left: 0, top: 0 }));
    }
  };
  render() {
    return (
      <ScrollContext.Provider value={{ restoreScroll: this.restoreScroll }}>
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

export default withRouter(ScrollRestoration);
