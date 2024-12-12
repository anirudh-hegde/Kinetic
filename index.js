// yarn add stream-chat
import { StreamChat } from 'stream-chat';
// if you're using common js
const StreamChat = require('stream-chat').StreamChat;

// instantiate your stream client using the API key and secret
// the secret is only used server side and gives you full access to the API
// find your API keys here https://getstream.io/dashboard/
const serverClient = StreamChat.getInstance('rmxf84wf6fwr', 'dm43xgbq5xutzdseyy34jkmg8z359ucvdfkcbeh7xsbgbjjg33mytbd4mpcztzj2');
// you can still use new StreamChat('api_key', 'api_secret');

// generate a token for the user with id 'john'
const token = serverClient.createToken('john');
// next, hand this token to the client in your in your login or registration response