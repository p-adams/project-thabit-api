package org.example
import java.time.chrono.*
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.get
import io.javalin.apibuilder.ApiBuilder.path


fun main() {
    val app = Javalin.create().start(7070)
    app.routes {
        path("/") {
            get { ctx -> ctx.result("project thabit api") }
        }
        path("dates") {
            path("now") {
                get {
                    // Obtains the current HijrahDate of the Islamic Umm Al-Qura calendar
                    // in the default time-zone.
                    ctx -> ctx.result(HijrahDate.now().toString())
                }
            }
        }
        path("measurements") {
            get { ctx -> ctx.result("measurements") }
        }
        path("weights") {
            path("convert") {
                get {
                    ctx ->
                    val a = ctx.queryParamMap()
                    ctx.result(a.toString())
                }
            }
        }
    }
}

