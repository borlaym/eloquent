package model

case class Game (
	id: Long,
	players: List[String],
	score: Option[Int],
	winner: Int
								)