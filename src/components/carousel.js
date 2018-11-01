import React from 'react';
import { Transition, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Box, Flex } from '../components/elements';

const defaultStyles = {
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2em',
  fontFamily: "'Kanit', sans-serif",
  textTransform: 'uppercase',
};

const CarouselProgressIndicator = ({ isActive }) => (
  <Box
    mx={2}
    css={{
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      background: isActive ? 'white' : 'none',
      border: '1px solid white',
    }}
  />
);

CarouselProgressIndicator.propTypes = {
  isActive: PropTypes.bool,
};

const range = (start, end) =>
  new Array(end - start + 1)
    .fill(undefined)
    .map((value, index) => index + start);

const CarouselProgressIndicators = ({ activeIndex, totalCount }) => {
  return (
    <Flex mx="auto" justifyContent="center">
      {range(0, totalCount - 1).map(id => (
        <CarouselProgressIndicator
          key={id}
          idx={id}
          isActive={id === activeIndex}
        />
      ))}
    </Flex>
  );
};

CarouselProgressIndicators.propTypes = {
  activeIndex: PropTypes.number,
  totalCount: PropTypes.number,
};

export class Carousel extends React.PureComponent {
  state = { items: [], index: 0 };

  componentDidMount = () => {
    this.timer = setInterval(() => {
      const index = (this.state.index + 1) % this.props.items.length;
      this.setState({ items: [this.props.items[index]], index });
    }, this.props.itemDuration);
  };

  async componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <div
        style={{
          overflow: 'hidden',
          cursor: 'pointer',
          margin: 0,
          padding: 0,
        }}
      >
        <Transition
          items={this.state.index}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          trail={200}
          key="main-carousel"
        >
          {index => styles => (
            <animated.div style={{ ...defaultStyles, ...styles }}>
              {this.props.items[index]}
            </animated.div>
          )}
        </Transition>
        <Box
          key="progress-indicators"
          style={{ position: 'absolute', bottom: '64px', left: 0, right: 0 }}
        >
          <CarouselProgressIndicators
            activeIndex={this.state.index}
            totalCount={this.props.items.length}
          />
        </Box>
      </div>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  itemDuration: PropTypes.number,
};

Carousel.defaultProps = {
  // itemDuration: 6000,
  itemDuration: 6000,
};
