export interface Filters {
  byName: string;
  byPrice: {
    min: number;
    max: number;
  };
  byAvailability: boolean;
}
