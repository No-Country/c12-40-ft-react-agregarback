//Esta es la pagina de chat, aqui se mostrara el chat y se podra enviar mensajes

import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export const Page = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
            const snapshot = await firebase
                .firestore()
                .collection("messages")
                .get();
            const messagesData = snapshot.docs.map((doc) => doc.data());
            setMessages(messagesData);
        };
        fetchMessages();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === "") return;

        await firebase.firestore().collection("messages").add({
            text: newMessage.trim(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setNewMessage("");
    };

    return (
        <div>
            <h1>Chat</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.text}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
