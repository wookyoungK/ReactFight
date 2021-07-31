const friends = [
  { name: "일", age: 1 },
  { name: "이", age: 2 },
  { name: "삼", age: 3 },
  { name: "사", age: 4 },
];
const timelines = [
  { desc: "점", likes: 0 },
  { desc: "심", likes: 10 },
  { desc: "이", likes: 15 },
  { desc: "맛", likes: 20 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
