package model

import play.api.libs.json.{Json, Reads}

final case class NewGame(
  groupId: Long,
  player1: String,
  player2: String,
  score1: Option[Int],
  score2: Option[Int],
  winner: Int
) {

  def withId(id: Long): Game =
    Game(id, groupId, player1, player2, score1, score2, winner)
}

object NewGame {
  implicit val reads: Reads[NewGame] = Json.reads[NewGame]
}