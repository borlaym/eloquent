package controllers

import javax.inject._
import play.api.mvc._
import model._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class GroupController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  val groups = Map[String, Group]("go" -> Group(23312, "Go"), "chess" -> Group(21311, "Chess"))


  def getGroupById(groupId: String) = Action { implicit request: Request[AnyContent] =>
    val group = groups.get(groupId)
    group match {
      case Some(Group(id, name)) => Ok(name)
      case _ => NotFound("Group not found")
    }
  }
}
