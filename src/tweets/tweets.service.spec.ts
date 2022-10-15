import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Tweet, TweetSchema } from './entities/tweet.entity';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;
  let module: TestingModule;

  beforeEach(async () => {
    const uri =
      'mongodb://root:root@localhost:27017/tweets_test?authSource=admin';
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
      ],
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a tweet', async () => {
    const tweet = await service.create({
      content: 'Hello World',
      screenName: 'Victor Pagnozi',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screenName).toBe('Victor Pagnozi');

    const tweetCreated = await service['tweetModel'].findById(tweet._id);

    expect(tweetCreated.content).toBe('Hello World');
    expect(tweetCreated.screenName).toBe('Victor Pagnozi');
  });

  it('should find all tweets', async () => {
    //criar um tweet
    //const tweets = await service.findAll();
  })

  it('should find one tweet', async () => {
    //criar um tweet
    //const tweet = await service.findOne();
  })
});
