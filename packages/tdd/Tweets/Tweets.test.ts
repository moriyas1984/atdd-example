// 新しいテストを追加する
// 雑な実装では動かないようなテストを作る

import { it, expect } from '@jest/globals'
import { queryTweetsByUserId } from './Tweets'

describe('TweetsからUserのデータを取り出す', () => {
  const Tweets = [
    { userid: '1', content: 'あいうえお' },
    { userid: '1', content: '今日はいい天気だ' },
    { userid: '2', content: '眼鏡が見つからない' },
  ]

  it('Userのデータがある場合', () => {
    const result = queryTweetsByUserId('1', Tweets)
    expect(result).toEqual([
      { userid: '1', content: 'あいうえお' },
      { userid: '1', content: '今日はいい天気だ' },
    ])
  })

  // 予想通り失敗
  it('Userのデータがない場合', () => {
    const result = queryTweetsByUserId('999', Tweets)
    expect(result).toEqual([])
  })
})
