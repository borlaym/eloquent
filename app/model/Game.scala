package model

import play.api.libs.json.{Json, Writes}

final case class Game(
  id: Long,
  groupId: Long,
  player1: String,
  player2: String,
  score1: Option[Int],
  score2: Option[Int],
  winner: Int
)

object Game {
  implicit val writes: Writes[Game] = Json.writes[Game]
}