import React, { PropTypes, Component } from 'react';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
};

const propTypes = {
  page: PropTypes.string,
  children: PropTypes.node,
};

class Link extends Component {
  constructor() {
    super();

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  handleMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  handleMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = propTypes;

export default Link;
