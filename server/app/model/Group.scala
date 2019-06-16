package model

import play.api.libs.json.{JsPath, Json, OFormat, Writes}

case class Group (
	id: Long,
	name: String
)

object Group {
	implicit val format = OFormat[Group](
		Json.reads[Group],
		Json.writes[Group])
}

