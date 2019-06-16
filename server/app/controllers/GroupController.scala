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

  val groups: Map[String, Group] = Map(
    "go" -> Group(23312, "Go", List(
      Game(1, List("Ed", "Viktor"), Some(List(21, 22)), 1),
      Game(2, List("Ed", "Viktor"), Some(List(5, 12)), 1),
      Game(3, List("Ed", "Viktor"), Some(List(25, 1)), 0)
    )),
    "chess" -> Group(21311, "Chess", List(
      Game(4, List("Marci", "Viktor"), None, 0),
      Game(5, List("Marci", "Viktor"), None, 1),
      Game(6, List("Marci", "Viktor"), None, 0)
    ))
  )


  def getGroupById(groupId: String) = Action { implicit request: Request[AnyContent] =>
    val group = groups.get(groupId)
    group match {
      case Some(group) => Ok(Json.toJson(group))
      case _ => NotFound("Group not found")
    }
  }
}
