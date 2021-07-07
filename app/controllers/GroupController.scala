package controllers

import data.{GameRepository, GroupRepository}
import model.GroupWithGames

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import scala.concurrent.ExecutionContext

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class GroupController @Inject()(
  cc: ControllerComponents,
  groupRepository: GroupRepository,
  gameRepository: GameRepository
)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def getGroupById(groupId: Long): Action[Unit] = Action.async(parse.empty) { implicit request =>
    for {
      groupOpt <- groupRepository.byId(groupId)
      games <- gameRepository.byGroupId(groupId)

      result = groupOpt match {
        case Some(group) =>
          val groupWithGames = GroupWithGames(group, games.toList)
          Ok(Json.toJson(groupWithGames))
        case None =>
          NotFound("Group not found")
      }
    } yield result
  }

  def getAllGroups(): Action[Unit] = Action.async(parse.empty) { implicit request =>
    for {
      groups <- groupRepository.all
      games <- gameRepository.all

      gameLookup = games.groupBy(_.groupId)
      groupsWithGames = groups.map { group =>
        GroupWithGames(group, gameLookup.getOrElse(group.id, Seq.empty).toList)
      }
    } yield Ok(Json.toJson(groupsWithGames))
  }
}

