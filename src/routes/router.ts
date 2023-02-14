import indexRoutes from "./_index-routes";
import testRoutes from "./_test-routes";

import {Router} from "express";

const expressRouter = Router();

expressRouter.use([
    testRoutes,
    indexRoutes
]);

export default expressRouter;