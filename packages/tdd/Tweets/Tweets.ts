// テストが通るように修正する
type Tweet = {
  userid: string
  content: string
}

export function queryTweetsByUserId(userId: string, tweets: Tweet[]) {
  return tweets.filter((tweet) => tweet.userid === userId)
}
