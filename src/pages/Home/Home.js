import { HomeContainer } from "./Home.style";
import ChatList from "../../components/ChatList/ChatList";
import TestPanel from '../../components/TestPanel/TestPanel';

const Home = () => {
  return (
    <HomeContainer>
      <ChatList />
      <TestPanel />
    </HomeContainer>
  );
};

export default Home;
