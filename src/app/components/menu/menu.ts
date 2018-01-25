import { MenuItem } from './../menu-item/menu-item';
export interface Menu {
    title: string,
    headerImage: string,
    mapMenu: Map<string, MenuItem[]>,
    createdBy: string,
    modifiedBy: string
}
