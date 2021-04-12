import {Router} from "express"
import { fromPairs } from "ramda"
import {addUsers, deleteUser, getUsers, updateUsers} from "./UserAccountIndex"

const router: Router = Router()

router.get("accounts", getUsers)

router.post("/add-user", addUsers)

router.put("/edit-user/:id", updateUsers)

router.delete("/delete-user/:id", deleteUser)

export default router
