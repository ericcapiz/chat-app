import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine 
      height="100vh" 
      projectID="b51416c6-17f7-42db-b5b8-6e4734746ccc" 
      userName="hatzhero85" 
      userSecret="test123"
      renderChatfeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    />
  );
}

export default App;
