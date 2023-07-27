import { 
    getSessionHandler, 
    loginHandler, 
    logoutHandler, 
    registerHandler 
} from "./controllers/sessionController.js"
import {
  checkUserName,
  checkEmail,
} from "./controllers/validatorControllers.js";

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

    // ajax 
    router.post("/api/usernameCheck", checkUserName);
    router.post("/api/emailCheck", checkEmail);
}

export default routes