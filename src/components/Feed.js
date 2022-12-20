import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Post from './Post';
import { db } from '../firebase';
import { collection, onSnapshot,doc, addDoc,serverTimestamp ,orderBy,query} from "firebase/firestore";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(()  => {
        const q = query(collection(db,'posts'), orderBy("timestamp", "desc"));
        onSnapshot(q,orderBy('timestamp','desc'), (snapshot)=>
        setPosts(
            snapshot.docs.map((doc) => ({
                id:doc.id,
                data: doc.data(),
            }))
        ))
    },[])

    const sendPost = e => {
        e.preventDefault();
        const message = {
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL || '',
            timestamp: serverTimestamp(),
        }
        addDoc(collection(db,'posts'), message)
        setInput('');
    }


  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon></CreateIcon>
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type="submit"></button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='rgb(55,143,233)'></InputOption>
                <InputOption Icon={VideoCameraBackOutlinedIcon} title='Video' color='rgb(95,155,65)'></InputOption>
                <InputOption Icon={EventOutlinedIcon} title='Events' color='rgb(195,125,22)'></InputOption>
                <InputOption Icon={FeedOutlinedIcon} title='Write Article' color='rgb(255,103,69)'></InputOption>
            </div>
        </div>
        <FlipMove>            
        {posts.map(({id, data: {
            name,description,message,photoURL
        }}) => (
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
            ></Post>
        ))}
        </FlipMove>
    </div>
  )
}

export default Feed