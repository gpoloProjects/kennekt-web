import { Nutrient } from './nutrient';
import { ActionState } from '../enums/action-state.enum';

export interface MenuItem {
    category: string,
    actionState: ActionState,
    image: string,
    avgCookTime: number,
    favorite: boolean,
    foodTitle: string,
    rating: number,
    priceTitles: string[],
    prices: number[],
    description: string, 
    nutrients: Nutrient,
    isEmpty: boolean
}
