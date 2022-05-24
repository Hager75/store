import React from 'react'
import './Card.scss'
export default function Card(props) {
    const classes = 'card shadow ' + props.className ;
  return (
    <div className={classes}>{props.children}</div>
  )
}
