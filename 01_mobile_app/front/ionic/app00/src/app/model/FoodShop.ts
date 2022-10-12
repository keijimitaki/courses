export class FoodShop {

  private id: string;
  private name: string;
  private genre: string;
  private lastUsedDate: string;
  private rating: number;
  private memo: string;

  constructor(id: string, name: string, genre: string, rating: number, lastUsedDate: string, memo: string) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.lastUsedDate = lastUsedDate;
    this.rating = rating;
    this.memo = memo;
  }

}
