import React from 'react';
import { Transition, animated } from 'react-spring';
import PropTypes from 'prop-types';

const defaultStyles = {
  overflow: 'hidden',
  width: '100%',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2em',
  fontFamily: "'Kanit', sans-serif",
  textTransform: 'uppercase',
};

export class Spring extends React.PureComponent {
  state = { items: [], index: 0 };

  componentDidMount = () => {
    this.timer = setInterval(() => {
      const index = (this.state.index + 1) % this.props.items.length;
      this.setState({ items: [this.props.items[index]], index });
    }, 3500);
  };

  async componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#70C1B3',
          overflow: 'hidden',
          cursor: 'pointer',
          margin: 0,
          padding: 0,
        }}
        onClick={() => this.componentDidMount()}
      >
        <Transition
          items={this.state.index}
          //initial={null}
          from={{ overflow: 'hidden', height: '100vh', opacity: 0 }}
          enter={{ height: '100vh', opacity: 1, background: '#28d79f' }}
          leave={{ height: '100vh', opacity: 0, background: '#c23369' }}
          update={{ background: '#28b4d7' }}
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

Spring.propTypes = {
  items: PropTypes.array.isRequired,
};
