package controllers

import javax.inject._

import play.api.mvc._
import model._
import controllers._
import play.api.libs.json.Json

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

  def addGame(gameId: Long) = Action { implicit request =>
    request.body.asJson match {
      case Some(json) => {
        val newGame = json.as[Game]
        GroupController.groups = GroupController.groups.mapValues {
          group => if (group.id == gameId) Group(group.id, group.name, newGame :: group.games) else group
		    }
        Ok("Ok")
      }
      case None => BadRequest("Malformed data")
    }
  }
}