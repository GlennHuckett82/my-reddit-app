import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './redux/actions';
import store from './redux/store';
import PostList from './components/PostList';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Reddit Minimal</h1>
            </header>
            <main>
                <PostList posts={posts} />
            </main>
        </div>
    );
}

const AppWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppWrapper;
