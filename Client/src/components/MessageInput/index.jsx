import { Paper, TextField, Button, CircularProgress } from '@mui/material';

const MessageInput = ({ inputMessage, setInputMessage, handleSubmit, isLoading }) => {
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={3}
      sx={{
        p: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: 3,
        bgcolor: '#1E1E1E',
      }}
    >
      <TextField
        fullWidth
        placeholder="Type your message..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        disabled={isLoading}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            color: '#E0E0E0',
            borderRadius: 2,
            '& fieldset': {
              borderColor: '#333333',
            },
            '&:hover fieldset': {
              borderColor: '#444444',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#BB86FC',
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#666666',
            opacity: 1,
          },
        }}
      />
      <Button 
        type="submit" 
        disabled={isLoading || !inputMessage.trim()}
        variant="contained"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '1rem',
          bgcolor: '#BB86FC',
          color: '#000000',
          '&:hover': {
            bgcolor: '#9969DA',
          },
          '&.Mui-disabled': {
            bgcolor: '#333333',
            color: '#666666',
          }
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Send'}
      </Button>
    </Paper>
  );
};

export default MessageInput;