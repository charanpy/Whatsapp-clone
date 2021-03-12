import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Navigate = ({ navigateTo, iconName }) => {
  return (
    <Link to={navigateTo}>
      <Icon className={iconName} />
    </Link>
  );
};

Navigate.propTypes = {
  navigateTo: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default Navigate;
