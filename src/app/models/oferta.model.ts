export interface Oferta {
    id: string;
    name: string;
    prices: {
        name: string;
        value: number;
    }[];
}