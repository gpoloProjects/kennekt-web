import { Menu } from './menu';
export interface Restaurant {
    id: number,
    title: string,
    mapMenu: Map<string, Menu>
}
