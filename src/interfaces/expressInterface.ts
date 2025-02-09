import {Request} from "express";

import { UserInterface } from "./userInterface";


export interface UserRequestInterface extends Request {
    user?: UserInterface
}