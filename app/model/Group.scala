package model

import play.api.libs.json.{JsPath, Json, OFormat, Writes}

case class Group (
	id: Long,
	name: String,
	games: List[Game]
)

object Group {
	implicit val format = OFormat[Group](
		Json.reads[Group],
		Json.writes[Group])
}

