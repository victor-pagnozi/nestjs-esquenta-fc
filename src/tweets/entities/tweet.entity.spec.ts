import mongoose from 'mongoose';
import { Tweet, TweetSchema } from './tweet.entity';

describe('Tweet Tests', () => {
  describe('Tweet Class', () => {
    it('should create a tweet', () => {
      const tweet = new Tweet({
        content: 'Hello World',
        screenName: 'Victor Pagnozi',
      });

      expect(tweet.content).toBe('Hello World');
      expect(tweet.screenName).toBe('Victor Pagnozi');
    });
  });

  describe('Using MongoDB', () => {
    let connection: mongoose.Mongoose;

    beforeEach(async () => {
      connection = await mongoose.connect(
        'mongodb://root:root@localhost:27017/tweets_test?authSource=admin',
      );
    });

    afterEach(async () => {
      await connection.disconnect();
    });

    it('create a tweet document', async () => {
      const TweetModel = connection.model('Tweet', TweetSchema);

      const tweet = new TweetModel({
        content: 'Hello World',
        screenName: 'Victor Pagnozi',
      });

      await tweet.save();

      const tweetCreated = await TweetModel.findById(tweet._id);

      expect(tweetCreated.content).toBe('Hello World');
      expect(tweetCreated.screenName).toBe('Victor Pagnozi');
    });
  });
});
