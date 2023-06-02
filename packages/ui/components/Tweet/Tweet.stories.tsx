import type { Meta, StoryObj } from '@storybook/react'
import Tweet from './Tweet'

const meta = {
  title: 'ATDD-Exapmle/Tweet',
  component: Tweet,
  tags: ['autodocs'],
} satisfies Meta<typeof Tweet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tweet: {
      id: '1',
      userName: 'test user',
      message: "Today, it's fine",
    },
  },
}

export const LongTweet: Story = {
  args: {
    tweet: {
      id: '2',
      userName: 'test user',
      message:
        'Brave girl journeys through magical lands, overcoming obstacles and making unique friends, to find her lost toy.',
    },
  },
}
