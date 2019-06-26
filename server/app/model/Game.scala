package model

import play.api.libs.json.{Json, OFormat}

case class Game (
	id: Long,
	players: List[String],
	score: Option[List[Int]],
	winner: Int
								)

object Game {
	implicit val format = Json.format[Game]
}