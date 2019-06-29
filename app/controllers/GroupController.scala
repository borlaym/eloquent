package controllers

import javax.inject._

import play.api.mvc._
import model._
import play.api.libs.json.Json

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class GroupController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getGroupById(groupId: Long) = Action { implicit request: Request[AnyContent] =>
    val group = GroupController.groups.get(groupId)
    group match {
      case Some(group) => Ok(Json.toJson(group))
      case _ => NotFound("Group not found")
    }
  }

  def getAllGroups() = Action { implicit request: Request[AnyContent] =>
      Ok(Json.toJson(GroupController.groups.map{ case (_, group) => group }))
  }
}

object GroupController {
  var groups: Map[Long, Group] = Map(
    23312.toLong -> Group(23312, "Go", List()),
    21311.toLong -> Group(21311, "Chess", List())
  )
}
