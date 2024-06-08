import monstera from '../Assets/monstera.jpg'
import lyrata from '../Assets/lyrata.jpg'
import pothos from '../Assets/pothos.jpg'
import succulent from '../Assets/succulent.jpg'
import olivier from '../Assets/olivier.jpg'
import basil from '../Assets/basil.jpg'
import mint from '../Assets/mint.jpg'
import calathea from '../Assets/calathea.jpg'
import cactus from '../Assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		light: 1,
		water: 2,
		cover: pothos,
		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		light: 3,
		water: 1,
		cover: calathea,
		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: false,
		light: 3,
		water: 1,
		cover: olivier,
		price: 25
	},
	{
		name: 'cactus',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		light: 2,
		water: 2,
		cover: cactus,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 5
	},
	{
		name: 'menthe',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: false,
		light: 2,
		water: 1,
		cover: mint,
		price: 4
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		light: 2,
		water: 1,
		cover: succulent,
		price: 8
	}
]