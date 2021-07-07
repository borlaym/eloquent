CREATE TABLE "group" (
  "id" bigserial NOT NULL PRIMARY KEY,
  "name" text NOT NULL
);

INSERT INTO "group" ("name") VALUES ('Go'), ('Chess');

CREATE TABLE "game" (
  "id" bigserial NOT NULL PRIMARY KEY,
  "groupId" bigint NOT NULL references "group"("id"),
  "player1" text NOT NULL,
  "player2" text NOT NULL,
  "score1" integer NULL,
  "score2" integer NULL,
  "winner" integer NOT NULL
);
