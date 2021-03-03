import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectChannelLoading } from '../../redux-sagas/channels/channels.selector';
import Spinner from '../../components/Spinner/Spinner';
import Home from './Home';

const mapStateToProps = createStructuredSelector({
  isLoading: selectChannelLoading,
});

const HomeContainer = compose(connect(mapStateToProps), Spinner)(Home);

export default HomeContainer;
