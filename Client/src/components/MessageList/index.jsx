import { Box, Paper, Avatar, Typography } from '@mui/material';

const Message = ({ message }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: message.isUser ? 'flex-end' : 'flex-start',
      mb: 2,
    }}
  >
    {!message.isUser && (
      <Avatar 
        sx={{ 
          width: 32, 
          height: 32,
          mr: 1,
          bgcolor: '#BB86FC'
        }}
      >
        AI
      </Avatar>
    )}
    <Box
      sx={{
        maxWidth: '70%',
        p: 2,
        borderRadius: 3,
        bgcolor: message.isUser ? '#BB86FC' : '#2D2D2D',
        color: message.isUser ? '#000000' : '#E0E0E0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        ...(message.isError && { 
          bgcolor: '#CF6679',
          color: '#000000',
        })
      }}
    >
      <Typography sx={{ lineHeight: 1.5 }}>{message.text}</Typography>
    </Box>
    {message.isUser && (
      <Avatar 
        sx={{ 
          width: 32, 
          height: 32,
          ml: 1,
          bgcolor: '#03DAC6'
        }}
      >
        U
      </Avatar>
    )}
  </Box>
);

const MessageList = ({ messages, messagesEndRef }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        flex: 1,
        mb: 3,
        p: 3,
        overflow: 'auto',
        borderRadius: 3,
        bgcolor: '#1E1E1E',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#2D2D2D',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#444444',
          borderRadius: '4px',
          '&:hover': {
            background: '#555555'
          }
        },
      }}
    >
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </Paper>
  );
};

export default MessageList;