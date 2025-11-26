import { useEffect, useState } from "react";

function Posts() {
const [posts, setPosts] = useState([]);

useEffect(() => {
async function fetchPosts() {
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
setPosts(data.slice(0, 10)); // show only 10
}

fetchPosts();
}, []);

return (
<div style={{ padding: "20px" }}>
<h2>Posts</h2>
{posts.map((p) => (
<div key={p.id} style={box}>
<h3>{p.title}</h3>
<p>{p.body}</p>
</div>
))}

</div>
);
}

const box = {
padding: "10px",
border: "1px solid #ccc",
marginBottom: "10px",
borderRadius: "5px",
};

export default Posts;