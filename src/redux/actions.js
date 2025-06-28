export const fetchPosts = () => async (dispatch) => {
try {
// Use Reddit's JSON API with .json extension and no-cors mode
const response = await fetch("https://www.reddit.com/r/reactjs.json", {
headers: {
"Content-Type": "application/json",
},
});

if (!response.ok) {
throw new Error("Network response was not ok");
}

const data = await response.json();
const posts = data.data.children.map((child) => child.data);

dispatch({ type: "FETCH_POSTS", posts });
} catch (error) {
console.error("Error fetching posts:", error);

// Fallback mock data if the API call fails
const mockPosts = [
{ id: 1, title: "Redux makes state management easy", author: "reduxuser", ups: 75 },
{ id: 2, title: "Learning React Hooks", author: "hookmaster", ups: 50 },
];

dispatch({ type: "FETCH_POSTS", posts: mockPosts });
}
};
