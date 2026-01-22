import { useState, useEffect } from 'react'
import JoinForm from './components/JoinForm'
import VideoRoom from './components/VideoRoom'
import './App.css'

function App() {
  const [joined, setJoined] = useState(false)
  const [name, setName] = useState("")
  const [roomID, setRoomID] = useState("")

  useEffect(() => {
    // Check for roomID in URL
    const params = new URLSearchParams(window.location.search);
    const roomFromUrl = params.get('roomID');
    if (roomFromUrl) {
      setRoomID(roomFromUrl);
    }
  }, []);

  return (
    <>
      {!joined ? (
        <JoinForm
          setJoined={setJoined}
          setName={setName}
          setRoomID={setRoomID}
          name={name}
          roomID={roomID}
        />
      ) : (
        <VideoRoom name={name} roomID={roomID} />
      )}
    </>
  )
}

export default App
