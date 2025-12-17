export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  createdAt: number;
};

let chatCache: Message[] = [];

export const getMessages = () => chatCache;

export const saveMessages = (messages: Message[]) => {
  chatCache = messages;
};

export const clearMessages = () => {
  chatCache = [];
};