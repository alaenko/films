import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars({count}) {
  const items = [];
  for (let i = 0 ; i < count ; i++) {
    items.push(
      <li key={i}>
        <Star />
      </li>
    )
  }

  return (
    < >
      {count > 0 && count < 6 &&
        <ul className="card-body-stars u-clearfix">
          {items}
        </ul>
      }
    </>
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars

