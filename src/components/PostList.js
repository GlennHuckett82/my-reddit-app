import React from 'react';

function PostList({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.thumbnail} alt={post.title} />
                    <p>{post.selftext}</p>
                    <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default PostList;