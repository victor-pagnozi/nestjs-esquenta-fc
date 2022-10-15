import { Tweet } from './tweet.entity';

describe('Tweet Tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screenName: 'Victor Pagnozi',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screenName).toBe('Victor Pagnozi');
  });
});
