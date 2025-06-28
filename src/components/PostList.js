import React from 'react';
import PostItem from './PostItem';


function PostList({ posts }) {
return (
<div>
<ul>
{posts.map((post) => (
<PostItem key={post.id} post={post} />
))}
</ul>
</div>
);
}

export default PostList;
