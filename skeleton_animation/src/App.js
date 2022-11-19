import React, { useState, useEffect } from "react";

import "./App.css";
import Card from "./Card";
import Skeleton from "./Skeleton";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())

        .then((data) => {
          setPosts(data);
        })

        .catch((err) => console.log(err));
    }, 3000);
  }, []);

  return (
    <>
      <h1>Posts</h1>

      {posts.length === 0 &&
        new Array(10).fill("").map((value) => <Skeleton key={value} />)}

      {posts.length
        ? posts.map((post) => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))
        : null}
    </>
  );
}

export default App;
