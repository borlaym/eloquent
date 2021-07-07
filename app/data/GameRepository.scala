package data

import model.{Game, NewGame}

import javax.inject.{Inject, Singleton}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import scala.concurrent.Future
import slick.jdbc.PostgresProfile
import slick.lifted.ProvenShape

@Singleton
class GameRepository @Inject()(
  val dbConfigProvider: DatabaseConfigProvider
) extends HasDatabaseConfigProvider[PostgresProfile] {

  import profile.api._

  private class GameTable(tag: Tag) extends Table[Game](tag, "game") {
    val id: Rep[Long] = column[Long]("id")
    val groupId: Rep[Long] = column[Long]("groupId")
    val player1 : Rep[String] = column[String]("player1")
    val player2 : Rep[String] = column[String]("player2")
    val score1 : Rep[Option[Int]] = column[Option[Int]]("score1")
    val score2 : Rep[Option[Int]] = column[Option[Int]]("score2")
    val winner : Rep[Int] = column[Int]("winner")

    val * : ProvenShape[Game] =
      (id, groupId, player1, player2, score1, score2, winner) <> ((Game.apply _).tupled, Game.unapply)
  }

  private val table = TableQuery[GameTable]

  private val inserter =
    table
      .returning(table.map(_.id))
      .into((inserted, id) => inserted.copy(id = id))

  def insert(newGame: NewGame): Future[Game] =
    db.run(
      inserter += newGame.withId(0)
    )

  def all: Future[Seq[Game]] =
    db.run(table.result)

  def byId(gameId: Long): Future[Option[Game]] =
    db.run(
      table.filter(_.id === gameId).result.headOption
    )

  def byGroupId(groupId: Long): Future[Seq[Game]] =
    db.run(
      table.filter(_.groupId === groupId).result
    )
}

