import axios from 'axios';

const API_BASE_URL = 'https://chat-assitance-server.vercel.app/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const chatService = {
  sendMessage: async (message) => {
    try {
      console.log('Sending message:', message); // Debug log
      
      const response = await axiosInstance.post('/chat', { message });
      console.log('Response:', response.data); // Debug log
      
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      throw error;
    }
  }
};


