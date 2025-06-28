export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts,
});

export const fetchPosts = () => async (dispatch) => {
    const response = await fetch('https://www.reddit.com/r/reactjs.json');
    const data = await response.json();
    const posts = data.data.children.map((child) => child.data);

    dispatch(setPosts(posts));
};