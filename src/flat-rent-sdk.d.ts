
export interface DatabaseItem {
  id: string,
  title: string,
  details: string,
  photos: [string, string],
  coordinates: [number, number],
  bookedDates: [],
  price: number
}

export const database: DatabaseItem[]

export function cloneDate(date: Date): number
export function addDays(date: Date, days: number): Date

export const backendPort: number
export const localStorageKey: string



export interface searchParameters {
  city: string;
  checkInDate: Date;
  checkOutDate: Date;
  priceLimit?: number;
}

export class FlatRentSdk {

  get(id: string): Promise<Object | null>
  searth(parametrs: searchParameters): Object[]
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number
  private _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
  private _resetTime(date: Date): void
  private _calculateDifferenceInDays(startDate: Date, endDate: Date): number
  private _generateDateRange(from: Date, to: Date): Date[]
  private _generateTransactionId(): number

  private _areAllDatesAvailable(flat: {}, dateRange: Date[]): boolean
  private _formatFlatObject(flat: {}, nightNumber?: null | number): {}
  private _readDatabase(): {}
  private _writeDatabase(database: searchParameters[]): void
  private _syncDatabase(database: searchParameters[]): void
}




