export class FoodShop {

  public id: string;
  private name: string;
  private genre: string;
  private lastUsedDate: string;
  private rating: string;
  private memo: string;

  constructor(id: string, name: string, genre: string, rating: string, lastUsedDate: string, memo: string) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.lastUsedDate = lastUsedDate;
    this.rating = rating;
    this.memo = memo;
  }

}
