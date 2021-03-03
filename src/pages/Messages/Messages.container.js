import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentChannelLoading } from '../../redux-sagas/channels/channels.selector';
import Spinner from '../../components/Spinner/Spinner';
import Messages from './Messages';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentChannelLoading,
});

const MessagesContainer = compose(connect(mapStateToProps), Spinner)(Messages);

export default MessagesContainer;
