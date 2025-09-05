/**
 *
 *  Given a list of timestamps and commodity prices, find out highest commodity price at given timestamp. timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.Followup: after each timestamp, commodity price entry, we are putting a checkpoint, given a timestamp and checkpoint find maximum commodity prices till then. */

const map = new Map();

class Store {
  add(timestamp, price) {
    const getPriceWithTimeStamp = map.get(timestamp) ?? [];
    getPriceWithTimeStamp.push(price);
    map.set(timestamp, getPriceWithTimeStamp);
  }

  highestPrice(timestamp) {
    const getPriceWithTimeStamp = map.get(timestamp) ?? [];
    if (getPriceWithTimeStamp.length === 0) return;
    return Math.max(...getPriceWithTimeStamp);
  }
}

const s = new Store();
s.add(1, 1);
s.add(1, 4);
s.add(2, 2);
s.add(2, 12);
s.add(1, 2);
console.log(s.highestPrice(1));
