import { Menu } from './menu';
export interface Restaurant {
    id: number;
    title: string;
    menus: string[]; // used to populate hashmap
    mapMenu: Map<string, Menu>;
}
