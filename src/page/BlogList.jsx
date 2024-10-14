import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import CryptoJS from "crypto-js";

const BlogList = ({ onEdit }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(blogs)

  const formatContentWithTailwind = (content) => {
    let formattedContent = content.replace(/<h1>/g, '<h1 class="text-4xl font-bold w-full text-center">');
    formattedContent = formattedContent.replace(/<h2>/g, '<h2 class="text-3xl font-semibold">');
    return formattedContent;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => {
          const encryptedContent = doc.data().content;
          const decryptedContent = CryptoJS.AES.decrypt(encryptedContent, "your-secret-key").toString(CryptoJS.enc.Utf8);
          return {
            id: doc.id,
            content: decryptedContent,
            createdAt: doc.data().createdAt,
          };
        });
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div>
      <h2>Danh sách Blog</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h3>Bài viết ID: {blog.id}</h3>
              <div dangerouslySetInnerHTML={{ __html: formatContentWithTailwind(blog.content) }} />
              <p>
                <i>Ngày tạo: {blog.createdAt?.toDate().toLocaleString()}</i>
              </p>
              <button onClick={() => onEdit(blog.id)}>Chỉnh sửa</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có bài viết nào.</p>
      )}
    </div>
  );
};

export default BlogList;