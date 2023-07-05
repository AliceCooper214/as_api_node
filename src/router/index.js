import Router from "@koa/router";
import { getUserProfile, login, registration, logout } from "./user";
import { getCities } from "./city";

const router = new Router();
router.prefix("/as");
router.get("/user/profile", getUserProfile);
router.post("/user/registration", registration);
router.get("/user/login", login);
router.all("/user/logout", logout);

router.get("/category/categories");
router.get("/category/subcategories/:categoryId");

router.get("/favorites");
router.post("/favorites/:goodsId");
router.delete("/favorites/:id");

router.get("/cities", getCities);

export default router;
