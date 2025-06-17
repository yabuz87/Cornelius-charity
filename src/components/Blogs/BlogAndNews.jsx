import React, { useEffect, useState, useCallback } from 'react';
import "./blog.css";
import {formatRelativeDate} from "../libs/utils.js"
import useGetStore from '../store/useGetStore';
import { LoaderIcon } from 'react-hot-toast';

const BlogAndNews = () => {
  const { blogData, isBlogsLoading, getBlogs } = useGetStore();
  const [liked, setLike] = useState({});
  const [activeCategory, setActiveCategory] = useState('All Posts');

  const fetchBlogs = useCallback(() => {
    getBlogs();
  }, [getBlogs]);

  const toggleLike = (id) => {
    setLike(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);


  const filteredBlogs = blogData ? blogData.filter(blog => {
    if (activeCategory === 'All Posts') return true;
    // Implement actual category filtering when available
    return true;
  }) : [];

  const categories = [
    { name: 'All Posts', icon: 'bi-grid' },
    { name: 'Our Impact', icon: 'bi-award' },
    { name: 'Project News', icon: 'bi-megaphone' },
    { name: 'New Blogs', icon: 'bi-pencil' },
    { name: 'Upcoming Plans', icon: 'bi-calendar' },
    { name: 'Success Stories', icon: 'bi-trophy' },
    { name: 'Team Updates', icon: 'bi-people' }
  ];

  return isBlogsLoading ? (
    <div className="loader-container">
      <LoaderIcon className="loader-icon" />
    </div>
  ) : (
    <div className="blog-container">
      {/* Left Sidebar - Categories */}
      <div className="sidebar left-sidebar">
        <h2 className="sidebar-title">Categories</h2>
        <ul className="category-list">
          {categories.map((category) => (
            <li 
              key={category.name}
              className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content - All Blog Posts */}
      <div className="main-content">
        {filteredBlogs.length > 0 ? (
          <div className="blog-posts-container">
            {filteredBlogs.map((blog) => (
              <article className="blog-post" key={blog.id}>
                <div className="post-image-container">
                  <img
                    className="post-image"
                    src={blog.photo || 'https://via.placeholder.com/800x450?text=Blog+Image'}
                    alt={blog.title}
                  />
                  <button 
                    className={`like-button ${liked[blog.id] ? 'liked' : ''}`}
                    onClick={() => toggleLike(blog.id)}
                  >
                    <i className={`bi ${liked[blog.id] ? "bi-heart-fill" : "bi-heart"}`}></i>
                  </button>
                </div>
                <div className="post-content">
                  <h2 className="post-title">{blog.title}</h2>
                  <div className="post-meta">
                    <span>
                      <i className="bi bi-calendar"></i>
                      {formatRelativeDate(blog.createdAt) ()}
                    </span>
                    <span>
                      <i className="bi bi-person"></i>
                      By {blog.author || 'Admin'}
                    </span>
                  </div>
                  <p className="post-body">
                    {blog.description}
                  </p>
                  <a href="#" className="read-more">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-post-selected">
            <i className="bi bi-newspaper"></i>
            <h2>No posts found</h2>
            <p>Try selecting a different category or check back later for new content</p>
          </div>
        )}
      </div>

      {/* Right Sidebar - Blog Previews */}
      <div className="sidebar right-sidebar">
        <h2 className="sidebar-title">Recent Posts</h2>
        <div className="post-previews">
          {blogData && blogData.length > 0 ? (
            blogData.slice(0, 5).map((blog) => (
              <div
                className="post-preview"
                key={blog.id}
              >
                <div className="preview-image-container">
                  <img
                    className="preview-image"
                    src={blog.photo || 'https://via.placeholder.com/150?text=Blog'}
                    alt={blog.title}
                  />
                </div>
                <div className="preview-content">
                  <h3 className="preview-title">{blog.title}</h3>
                  <p className="preview-date">
                    <i className="bi bi-calendar"></i> {formatRelativeDate(blog.createdAt)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-posts-message">No recent posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogAndNews;