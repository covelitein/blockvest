import { getSessionHandler, loginHandler, logoutHandler, registerHandler } from "./controllers/sessionController.js"
import { requireUser } from "./middleware/requireUser.js"


const routes = (router)=> {
    // register route
    router.post("/api/register", registerHandler);

    // login route
    router.post("/api/login", loginHandler);

    // get user session
    router.get("/api/session", requireUser, getSessionHandler);

    // logout
    router.delete("/api/logout", requireUser, logoutHandler);
}

export default routes