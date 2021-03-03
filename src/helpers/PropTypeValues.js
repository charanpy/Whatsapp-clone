import PropTypes from 'prop-types';

export const ChannelPropTypes = PropTypes.shape({
  groupId: PropTypes.string,
  displayName: PropTypes.string,
  uid: PropTypes.string,
  photoURL: PropTypes.string,
});

export const CurrentUserIdPropTypes = PropTypes.string.isRequired;
