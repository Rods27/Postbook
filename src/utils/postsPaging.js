import posts from '../data/posts.json';

export default function postsPaging () {
  let result = [];
  let insideList = [];
  posts.forEach((elem) => {
    insideList.push(elem);
    if (insideList.length === 10) {
      result.push(insideList);
      insideList = [];
    }
  });
  return result;
}