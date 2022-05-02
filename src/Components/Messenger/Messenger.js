import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import ChatFeed from './ChatFeed'
import './styles.css';


const Messenger = () => {
    const [username, setUsername] = useState('')

    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }
    function renderChatForm(creds) {
        return (
            <div>
                <input
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => createDirectChat(creds)}>
                    Create
                </button>
            </div>
        )
    }


    return (
        <ChatEngine
            offset={-4}
            height="90vh"
            projectID="e2020eb4-6d7b-4316-bda6-7b33f918e222"
            userName="Name"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        //renderNewChatForm={(creds) => renderChatForm(creds)}

        />
    );
};

// infinite scroll, logout, more customizations...

export default Messenger;
