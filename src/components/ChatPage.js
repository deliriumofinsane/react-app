import React from 'react';
import { withStyles } from 'material-ui/styles';

import Sidebar from './sidebar';
import AppHeader from './appHeader';
import Chat from './chat';

import {chats, messages} from '../mock-data.json';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },   
  
});

const ChatPage = ({ classes }) => (
        <div className={classes.appFrame}>

        <AppHeader/>
        <Sidebar chats={chats}/>
        <Chat messages={messages}/>

        </div>
);

export default withStyles(styles)(ChatPage);
