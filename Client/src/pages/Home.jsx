import { useState, useRef, useEffect } from "react";
import { Container } from "@mui/material";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import { chatService } from "../services/api";

const INITIAL_ERROR_MESSAGE = "ขออภัย ไม่สามารถประมวลผลข้อความได้ ลองใหม่ครั้ง";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text, isUser, isError = false) => {
    setMessages((prev) => [...prev, { text, isUser, isError }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = inputMessage.trim();
    if (!message) return;

    setInputMessage("");
    setIsLoading(true);
    addMessage(message, true);

    try {
      const { status, reply, error } = await chatService.sendMessage(message);

      if (status === "success" && reply) {
        addMessage(reply, false);
      } else {
        throw new Error(error || "Failed to get response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      addMessage(INITIAL_ERROR_MESSAGE, false, true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        py: 3,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
      }}
    >
      <Header />
      <MessageList messages={messages} messagesEndRef={messagesEndRef} />
      <MessageInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Home;
