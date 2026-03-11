import React from "react";

interface BlogItemProps {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
}

const BlogItem = ({ id, title, excerpt, image, alt }: BlogItemProps) => {
  return (
    <div key={id}>
      <div className="blog-card shadow-[var(--box-shadow)] transition-[0.3s] w-75 rounded-xl m-2.5 overflow-hidden bg-[var(--bg-primary)]">
        <img className="w-full h-50 object-cover" src={image} alt={alt} />
        <div className="container px-4 py-1">
          <h4 className="blog-title text-xl font-bold mx-0 my-2.5">{title}</h4>
          <p className="blog-summary">{excerpt}</p>
          <a
            href="./importanceofwebdesign.html"
            className="read-more px-5 py-2.5 mx-0 my-2.5 rounded-md"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
