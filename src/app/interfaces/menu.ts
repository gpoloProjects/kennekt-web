import { MenuItem } from './menu-item';
export interface Menu {
    restaurantChain: string;
    title: string;
    headerImage: string;
    categories: string[];
    mapMenuItem: Map<string, MenuItem[]>; // category, menu item
    createdBy: string;
    modifiedBy: string;
}
