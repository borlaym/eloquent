package model

import play.api.libs.json.{Json}

case class NewGame (
  players: List[String],
  score: Option[List[Int]],
  winner: Int
)

object NewGame {
  implicit val format = Json.format[NewGame]
}