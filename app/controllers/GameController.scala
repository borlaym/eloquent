package controllers

import javax.inject._

import play.api.mvc._
import model._
import controllers._
import play.api.libs.json.{JsError, JsSuccess, Json}

/**
  * This controller creates an `Action` to handle HTTP requests to the
  * application's home page.
  */
@Singleton
class GameController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def getGameById(gameId: Long) = Action { implicit request: Request[AnyContent] =>
    val games = GroupController.groups.map{ case (_, group) => group.games }.flatten
    games.find(game => game.id == gameId) match {
      case Some(game) => Ok(Json.toJson((game)))
      case None => NotFound("Game not found")
    }
  }

  def addGame(groupId: Long) = Action { implicit request =>
    request.body.asJson match {
      case Some(json) => {
        Json.fromJson[NewGame](json) match {
          case JsSuccess(newGame, _) => {
            GroupController.groups = GroupController.groups.map { case (id, group) => {
				if (group.id == groupId) (id, Group(
					group.id,
					group.name,
					Game(System.currentTimeMillis(), newGame.players, newGame.score, newGame.winner) :: group.games
				))
				else (id, group)
			  }
			}
            Ok("Ok")
          }
          case e: JsError => {
            println("Errors: " + JsError.toJson(e).toString())
            BadRequest("Malformed data")
          }
        }
      }
      case None => BadRequest("No data")
    }

  }
}
