export type TweetProps = {
  content: string;
  screenName: string;
};

export class Tweet {
  constructor(props: TweetProps) {
    Object.assign(this, props);
  }

  content: string;

  screenName: string;
}
