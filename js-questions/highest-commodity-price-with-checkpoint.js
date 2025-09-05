/**
 *
 *  Given a list of timestamps and commodity prices, find out highest commodity price at given timestamp. timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.Followup: after each timestamp, commodity price entry, we are putting a checkpoint, given a timestamp and checkpoint find maximum commodity prices till then. */

const map = new Map();

class Store {
  add(timestamp, price, checkpoint) {
    const getPriceWithTimeStamp = map.get(timestamp) ?? [];
    if (checkpoint) getPriceWithTimeStamp.push(price, checkpoint);
    else getPriceWithTimeStamp.push(price);
    map.set(timestamp, getPriceWithTimeStamp);
  }

  highestPrice(timestamp, checkpoint) {
    const getPriceWithTimeStamp = map.get(timestamp) ?? [];
    if (getPriceWithTimeStamp.length === 0) return;

    let arrayForMax = getPriceWithTimeStamp;

    if (checkpoint) {
      const index = getPriceWithTimeStamp.findIndex(
        (prices) => prices === checkpoint
      );
      arrayForMax = getPriceWithTimeStamp.slice(0, index);
    }

    const filterdCheckPoints = arrayForMax.filter(
      (prices) => typeof prices === "number"
    );
    if (filterdCheckPoints.length === 0) return;
    return Math.max(...filterdCheckPoints);
  }
}

const s = new Store();
s.add(1, 1);
s.add(1, 4);
s.add(1, 2);
s.add(1, 3, "a");
s.add(1, 6);
s.add(1, 7);
s.add(1, 8, "b");

console.log(s.highestPrice(1, "a")); // 4
console.log(s.highestPrice(1, "b")); // 8
