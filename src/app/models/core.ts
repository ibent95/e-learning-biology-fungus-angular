export class Core {
}

export interface SlideShowImageResource {
	url: string;
	caption: string;
}

export interface PriceListItem {
	checklist: boolean;
	description: string;
}

export interface PriceListResource {
	title: string;
	subtitle?: string;
	price: number;
	items: Array<PriceListItem>;
}