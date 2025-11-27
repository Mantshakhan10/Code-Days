function BlogCard({ title, description, author }) {
  return (
    <div className="blog-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="author">✍ {author}</span>
      </div>
    </div>
  );
}

export default BlogCard;
