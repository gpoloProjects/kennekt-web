import { MenuItem } from './../menu-item/menu-item';
export interface Menu {
    title: string,
    createdBy: string,
    modifiedBy: string,
    menu: Map<string, MenuItem[]>
}
