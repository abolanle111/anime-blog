import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    } else {
      fetchBlogs();
    }
  }, [navigate]);

  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    try {
      const blogCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    } catch (err) {
      console.error(err);
    }
  };

  // Add a new blog
  const addBlog = async () => {
    const { title, content } = newBlog;

    if (!auth.currentUser) {
      console.error("No user is logged in.");
      return;
    }

    const author = {
      name: auth.currentUser.displayName || "Anonymous",
      id: auth.currentUser.uid,
    };

    try {
      if (title.trim() && content.trim()) {
        const blogCollection = collection(db, "blogs");
        await addDoc(blogCollection, { title, content, author });
        setNewBlog({ title: "", content: "" });
        fetchBlogs();

      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      const blogDoc = doc(db, "blogs", id);
      await deleteDoc(blogDoc);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 border-t-2 border-gray-600 pt-4">
        Welcome Back!
      </h1>

      {/* Add Blog Section */}
      <div className="mb-10 space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2 text-lg font-semibold">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            placeholder="Enter blog title"
            className="w-full p-2 rounded-md bg-gray-800 text-white outline-none"
          />
        </div>

        <div>
          <label htmlFor="content" className="block mb-2 text-lg font-semibold">
            Blog Content
          </label>
          <textarea
            id="content"
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            placeholder="Enter blog content"
            rows={6}
            className="w-full p-2 rounded-md bg-gray-800 text-white outline-none"
          />
        </div>

        <button
          onClick={addBlog}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Add Blog
        </button>
      </div>

      {/* Blog List */}
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="flex justify-between items-center border border-gray-700 p-4 rounded-md"
          >
            <div>
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-400">{blog.content}</p>
              <p className="text-sm text-gray-500">
                Author: {blog.author?.name} (ID: {blog.author?.id})
              </p>
            </div>
            <button
              onClick={() => deleteBlog(blog.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
