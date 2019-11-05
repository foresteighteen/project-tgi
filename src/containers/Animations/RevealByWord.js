import React, { PureComponent, Fragment } from 'react';
import { TimelineLite } from 'gsap';
// import { animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import SplitText from '../../utils/SplitText';

export default class RevealByWord extends PureComponent {
  static defaultProps = {
    duration: 0.5,
    stagger: 0.2,
    waypointTopOffset: '0%',
    waypointBottomOffset: '20%',
    forwardSpeed: 1,
    reverseSpeed: 0.5,
  };
  constructor(props) {
    super(props);

    this.revealText = this.revealText.bind(this);
    this.destroySplitText = this.destroySplitText.bind(this);
    this.mySplitText = null;
    this.splitTextTimeline = null;
  }

  state = { waypointActive: true };

  componentDidMount() {
    this.mySplitText = new SplitText(this.splitThisText, {
      type: 'words, lines',
    });
    this.splitTextTimeline = new TimelineLite({
      immediateRender: false,
      paused: true,
    });

    this.splitTextTimeline
      .addLabel('start')
      .set(
        this.mySplitText.lines,
        { perspective: 400, overflow: 'hidden' },
        'start',
      )
      .set(this.splitThisText, { opacity: 1 }, 'start')
      .staggerFromTo(
        this.mySplitText.words,
        this.props.duration,
        {
          y: '100%',
          transformOrigin: 'top center -150',
        },
        {
          y: '0%',
          force3D: true,
        },
        this.props.stagger,
        'start',
      );
  }

  componentWillUnmount() {
    // this.destroySplitText();
  }

  destroySplitText() {
    this.setState({ waypointActive: false });
    this.mySplitText.revert();
  }

  revealText(direction) {
    if (direction === 'enter') {
      this.splitTextTimeline.play(0).timeScale(this.props.forwardSpeed);
    } else {
      this.splitTextTimeline.reverse().timeScale(this.props.reverseSpeed);
    }
  }
  test = () => {
    // console.log(this.splitThisText);
    // console.log(this.mySplitText);
    // console.log(this.splitTextTimeline);
    return true;
  };
  render() {
    return (
      <Fragment>
        {this.test() && this.state.waypointActive && (
          <Waypoint
            onEnter={this.revealText.bind(this, 'enter')}
            onLeave={this.revealText.bind(this, 'leave')}
            topOffset={this.props.waypointTopOffset}
            bottomOffset={this.props.waypointBottomOffset}
            scrollableAncestor={document.getElementById('#page-wrap')}
          />
        )}

        <div
          ref={x => {
            this.splitThisText = x;
          }}
          style={{ opacity: 0 }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
