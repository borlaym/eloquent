package model

import play.api.libs.json.{Json, Writes}

final case class GroupWithGames(
  group: Group,
  games: List[Game]
)

object GroupWithGames {
  implicit val writes: Writes[GroupWithGames] = Json.writes[GroupWithGames]
}
