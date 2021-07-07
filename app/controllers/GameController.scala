package controllers

import data.GameRepository
import model.NewGame

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import scala.concurrent.ExecutionContext

/**
  * This controller creates an `Action` to handle HTTP requests to the
  * application's home page.
  */
@Singleton
class GameController @Inject()(
  cc: ControllerComponents,
  gameRepository: GameRepository
)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def getGameById(gameId: Long): Action[Unit] = Action.async(parse.empty) { implicit request =>
    for {
      gameOpt <- gameRepository.byId(gameId)

      result = gameOpt match {
        case Some(game) => Ok(Json.toJson(game))
        case None => NotFound("Game not found")
      }
    } yield result
  }

  def addGame(): Action[NewGame] = Action.async(parse.json[NewGame]) { implicit request =>
    for {
      game <- gameRepository.insert(request.body)
    } yield Created(Json.toJson(game))
  }
}
