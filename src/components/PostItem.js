import React from 'react';

function PostItem({ post }) {
  return (
    <li>
      <h3>{post.title}</h3>
      {post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' && (
        <img src={post.thumbnail} alt={post.title} />
      )}
      <p>{post.selftext}</p>
      <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <p>👍 {post.ups} upvotes</p>
    </li>
  );
}

export default PostItem;
