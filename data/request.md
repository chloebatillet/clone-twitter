## Select tweet with their hashtag
```
SELECT tweet.id, tweet.content, hashtag.name FROM tweet JOIN tweet_has_hashtag ON tweet.id=tweet_has_hashtag.tweet_id JOIN hashtag ON tweet_has_hashtag.hashtag_id=hashtag.id;
```

## Select user with their tweets
```
SELECT "user".username, tweet.content FROM "user" JOIN tweet ON "user".id=tweet.user_id;
```

## Select tweets with their replies
```
SELECT original_tweet.content, tweet.content FROM tweet JOIN tweet original_tweet ON tweet.replies_to=original_tweet.id;
```