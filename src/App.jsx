import React, { useState } from 'react';
import Header from './components/Header';
import Dialog from './components/Dialog';
import Sender from './components/Sender';

function App() {
  const [message, setMessage] = useState(null);
  return (
    <div className="Container">
      <Header />
      <Dialog newMessage={message} />
      <Sender onAddMessage={setMessage} />
    </div>
  );
}

export default App;
