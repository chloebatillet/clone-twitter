DROP TABLE IF EXISTS "user", "tweet", "hashtag", "tweet_has_hashtag", "tweet_has_tweet";


CREATE TABLE "user"
(
"id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"username" CHAR(20) NOT NULL,
"password" TEXT NOT NULL,
"email" TEXT NOT NULL,
"bio" CHAR(200),
"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
"updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE "tweet"
(
"id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"content" CHAR(240) NOT NULL,
"user_id" INT NOT NULL,
"replies_to" INT REFERENCES "tweet"("id"),
"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
"updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
FOREIGN KEY ("user_id") REFERENCES "user"("id")
);


CREATE TABLE "hashtag"
(
"id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT NOT NULL,
"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
"updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE "tweet_has_hashtag"
(
"tweet_id" INTEGER NOT NULL,
"hashtag_id" INTEGER NOT NULL,
PRIMARY KEY ("tweet_id", "hashtag_id"),
CONSTRAINT "fk_tweet_has_hashtag_tweet" FOREIGN KEY("tweet_id") REFERENCES "tweet"("id") ON DELETE CASCADE,
CONSTRAINT "fk_tweet_has_hashtag_hashtag" FOREIGN KEY("hashtag_id") REFERENCES "hashtag"("id") ON DELETE CASCADE
);



INSERT INTO "user" ("username", "password", "email", "bio") VALUES ('chloe', 'chloe', 'chloe@gmail.com', 'Hello, it is Chloé');
INSERT INTO "tweet" ("content", "user_id") VALUES ('This is my first tweet', 1);
INSERT INTO "tweet" ("content", "user_id") VALUES ('This is my second tweet', 1);
INSERT INTO "tweet" ("content", "user_id", "replies_to") VALUES ('This is a reply to my first tweet', 1, 1);
INSERT INTO "hashtag" ("name") VALUES ('hashtag');
INSERT INTO "tweet_has_hashtag" ("tweet_id", "hashtag_id") VALUES (1, 1);

