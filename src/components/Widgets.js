import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className="article__title">
            <CircleIcon className='title__icon'/>
            <h4>{heading}</h4>
            </div>
            <p>{subtitle}</p>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon></InfoIcon>
        </div>
        {newsArticle("House Ways and Means Committee is meeting on future of Trump's tax returns - CNN","BBC News")}
    </div>
  )
}

export default Widgets