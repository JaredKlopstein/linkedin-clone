import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ScreenRotationAltOutlinedIcon from '@mui/icons-material/ScreenRotationAltOutlined';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(( {name, description, message, photoURL}, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like"/>
            <InputOption Icon={CommentIcon} title="Comment"/>
            <InputOption Icon={ScreenRotationAltOutlinedIcon} title="Repost"/>
            <InputOption Icon={SendIcon} title="Send"/>
        </div>
    </div>
  )
})

export default Post