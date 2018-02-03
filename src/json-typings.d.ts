import { Menu } from "./app/interfaces/menu";

declare module "*.json" {
    const value: Menu;
    export default value;
}