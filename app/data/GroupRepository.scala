package data

import model.Group

import javax.inject.{Inject, Singleton}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import scala.concurrent.Future
import slick.jdbc.PostgresProfile
import slick.lifted.ProvenShape

@Singleton
class GroupRepository @Inject()(
  val dbConfigProvider: DatabaseConfigProvider
) extends HasDatabaseConfigProvider[PostgresProfile] {

  import profile.api._

  private class GroupTable(tag: Tag) extends Table[Group](tag, "group") {
    val id: Rep[Long] = column[Long]("id")
    val name : Rep[String] = column[String]("name")

    val * : ProvenShape[Group] = (id, name) <> ((Group.apply _).tupled, Group.unapply)
  }

  private val table = TableQuery[GroupTable]

  def all: Future[Seq[Group]] =
    db.run(table.result)

  def byId(groupId: Long): Future[Option[Group]] =
    db.run(
      table.filter(_.id === groupId).result.headOption
    )
}
