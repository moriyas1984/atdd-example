import { it, expect } from '@jest/globals'

it('TweetsからUserのデータを取り出す', () => {
  const Tweets = [
    { userid: '1', content: 'あいうえお' },
    { userid: '1', content: '今日はいい天気だ' },
    { userid: '2', content: '眼鏡が見つからない' },
  ]

  const result = queryTweetsByUserId('1', Tweets)
  expect(result).toEqual([
    { userid: '1', content: 'あいうえお' },
    { userid: '1', content: '今日はいい天気だ' },
    { userid: '2', content: '眼鏡が見つからない' },
  ])
})
