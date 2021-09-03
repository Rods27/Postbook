import posts from '../data/posts.json';

export default function postsPaging () {
  let result = [];
  let insideList = [];
  posts.sort(() => (Math.random() > .5) ? 1 : -1)
  posts.forEach((elem) => {
    insideList.push(elem);
    if (insideList.length === 10) {
      result.push(insideList);
      insideList = [];
    }
  });
  return result;
}