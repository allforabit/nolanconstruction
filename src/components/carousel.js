import React from 'react';
import { Transition, animated } from 'react-spring';
import PropTypes from 'prop-types';

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
        >
          {index => styles => (
            <animated.div style={{ ...defaultStyles, ...styles }}>
              {this.props.items[index]}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  itemDuration: PropTypes.number,
};

Carousel.defaultProps = {
  itemDuration: 6000,
};
