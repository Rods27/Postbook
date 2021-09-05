import users from '../data/users.json';
import posts from '../data/posts.json';
import comments from '../data/comments.json';
import postsPaging from './postsPaging';

export default function postsIntegration(details) {
  posts.forEach((elem1) => {
    let commentsArr = [];
    users.forEach((elem2) => {
      if(elem1.userId === elem2.id) elem1.name = elem2.name;
    })
    comments.forEach((elem2) => {
      if(elem1.id === elem2.postId) commentsArr.push(elem2);
    })
    elem1.comments = commentsArr;
  });
  if (details) return posts
  return postsPaging();
}

