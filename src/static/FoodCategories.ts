export interface FoodProps{
    id:number,
    title:string,
    background:string
}

export const FOOD_CATEGORIES: Array<FoodProps>= [
{
    id:1,
    title:'Breakfast',
    background: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)'
},
{
    id:2,
    title:'Vegan',
    background: ' linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)'
},
{
    id:3,
    title:'Meat',
    background: '  linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)'
},
{
    id:4,
    title:'Dessert',
    background: ' linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)'
},
{
    id:5,
    title:'Lunch',
    background: ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)'
},
{
    id:6,
    title:'Chocolate',
    background: ' linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)'
},



]