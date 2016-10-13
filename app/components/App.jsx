import React, { PropTypes } from 'react';
import Link from './Link';

function App({ message }) {
  return (
    <div>
      <Link>
        <div className="container">{message}</div>
      </Link>
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
