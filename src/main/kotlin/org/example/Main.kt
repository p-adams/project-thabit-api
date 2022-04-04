package org.example
import java.time.chrono.*
import io.javalin.Javalin



fun main() {
    val app = Javalin.create().start(7070)
    app.get("/dates/today") {ctx -> ctx.result(HijrahDate.now().toString())}
    app.get("/") { ctx -> ctx.result("project thabit api") }
}

