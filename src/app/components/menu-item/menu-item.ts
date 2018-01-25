import { Nutrient } from './nutrient';

export interface MenuItem {
    foodTitle: string,
    category: string,
    image: string,
    description: string,
    priceTitles: string[],
    prices: number[],
    nutrients: Nutrient,
    rating: number,
    favorite: boolean
}
