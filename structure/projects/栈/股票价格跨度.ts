// 注意审题
class StockSpanner {
  // values: number[];

  // constructor() {
  //   this.values = [];
  // }

  // next(price: number): number {

  //   // 不包括等于
  //   let idx = this.values.findIndex(ele => ele > price);
  //   this.values.unshift(price);
  //   return idx === -1 ? this.values.length : ++idx;
  // }

  values: number[];
  idx: number[];

  constructor() {
    this.values = [];
    this.idx = [];
  }

  next(price: number): number {
    let i = 1;
    while (this.values.length > 0 && this.values[this.values.length - 1] <= price) {
      this.values.pop();
      i += this.idx.pop();
    }

    this.values.push(price);
    this.idx.push(i);

    return i;
  }
}