import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    { id: 1, title: "Understanding React Components", description: "React helps build UI from independent reusable pieces.", author: "Mantsha" },
    { id: 2, title: "What is JSX?", description: "JSX lets us write HTML inside JavaScript for better UI building.", author: "Mariya" },
    { id: 3, title: "Props vs State", description: "Learn the difference between props and state in simplest way.", author: "Disha" }
  ];

  return (
    <div className="blog-container">
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          author={blog.author}
        />
      ))}
    </div>
  );
}

export default BlogList;
