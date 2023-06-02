import React from 'react'

type TweetProps = {
  tweet: { id: string; userName: string; message: string }
}

function Tweet(props: TweetProps) {
  return (
    <>
      <div>
        <span>id: </span>
        <span>{props.tweet.id}</span>
      </div>
      <div>
        <p>{props.tweet.message}</p>
      </div>
    </>
  )
}

export default Tweet
