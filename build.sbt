name := """eloquent"""
organization := "com.mborlay"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.8"

libraryDependencies ++= Seq(
  guice,

  "com.typesafe.slick" %% "slick" % "3.3.2",
  "com.typesafe.play" %% "play-slick" % "4.0.2",
  "org.postgresql" % "postgresql" % "42.2.6" % Runtime,

  "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.2" % Test
)

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.mborlay.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.mborlay.binders._"
