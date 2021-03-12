import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../redux-sagas/message/message.selector';
import Spinner from '../Spinner/Spinner';
import Messages from './Message';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const MessagesContainer = compose(connect(mapStateToProps), Spinner)(Messages);

export default MessagesContainer;
