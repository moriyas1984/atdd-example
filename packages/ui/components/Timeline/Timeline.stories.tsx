import type { Meta, StoryObj } from '@storybook/react'
import Timeline from './Timeline'

import '@testing-library/jest-dom'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
  title: 'ATDD-Exapmle/Timeline',
  component: Timeline,
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const NoTweet: Story = {
  args: {
    tweets: [],
  },
  play: async ({ canvasElemment }) => {
    const canvas = within(canvasElemment)
    const tweets = () => canvas.queryByTestId('tweet')
    // tweetsが空配列の場合、Tweetは表示されない
    await expect(tweets).not.toBeIntheDocument()
    const message = () => canvas.getByText('今何してる?')
    // '今何してる?'と表示される
    await expect(message).toBeInTheDocument()
  },
}
