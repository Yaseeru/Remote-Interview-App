import React from 'react';

interface JoinFormProps {
  setJoined: (joined: boolean) => void;
  setName: (name: string) => void;
  setRoomID: (roomID: string) => void;
  name: string;
  roomID: string;
}

const JoinForm: React.FC<JoinFormProps> = ({ setJoined, setName, setRoomID, name, roomID }) => {

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      // If roomID checks out or we generate one
      if (!roomID) {
        const newRoomID = Math.random().toString(36).substring(2, 7);
        setRoomID(newRoomID);
      }
      setJoined(true);
    }
  };

  return (
    <div className="join-container">
      <div className="join-card">
        <h1>Remote Interview</h1>
        <p>{roomID ? `Joining Room: ${roomID}` : "Create a new meeting or enter a code"}</p>
        <form onSubmit={handleJoin}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />

          {/* If roomID is already set from URL, we could hide this or make it readonly, 
              but for flexibility let's allow editing URL-based room only if explicit action? 
              For now, let's keep it simple: simpler UI if Room ID exists */}

          {!roomID && (
            // Optional: Allow user to still manually enter if they want? 
            // The requirement says "instead of providing user shoud be able to create".
            // But usually you still need a way to join if you have a code but no link.
            // Im implementing a "Create New" vs "Enter Code" toggle implicitly or just inputs.
            // Let's make "Create Meeting" the default action if input is empty.
            <input
              type="text"
              placeholder="Room ID (Optional - leave empty to create)"
              value={roomID}
              onChange={(e) => setRoomID(e.target.value)}
              className="input-field"
            />
          )}

          <button type="submit" className="join-btn">
            {roomID ? "Join Interview" : "Create Meeting"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
