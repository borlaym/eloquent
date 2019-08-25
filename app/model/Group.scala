package model

import play.api.libs.json.{Format, Json}

final case class Group (
	id: Long,
	name: String
)

object Group {
	implicit val format: Format[Group] = Json.format[Group]
}

