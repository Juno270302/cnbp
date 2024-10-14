import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../firebase/firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage"; // Firebase Storage
import { collection, addDoc } from "firebase/firestore"; // Firestore
import CryptoJS from "crypto-js";

const Blog = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const uploadImageToStorage = async (imageBase64) => {
    const storageRef = ref(storage, `images/${Date.now()}.png`); // Tạo một tham chiếu với tên tệp duy nhất
    try {
      await uploadString(storageRef, imageBase64, "data_url"); // Tải lên hình ảnh dạng base64
      const downloadURL = await getDownloadURL(storageRef); // Lấy URL tải xuống của hình ảnh
      return downloadURL; // Trả về URL tải xuống
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const saveBlogToFirebase = async () => {
    // Tìm tất cả hình ảnh base64 trong nội dung blog
    const imageTags = content.match(
      /<img.*?src="(data:image\/png;base64,.*?)".*?>/g
    );

    let newContent = content;

    if (imageTags) {
      for (const imageTag of imageTags) {
        const base64Image = imageTag.match(/src="(.*?)"/)[1]; // Lấy chuỗi base64 từ thẻ img

        // Lưu hình ảnh vào Firebase Storage và lấy URL tải xuống
        const imageUrl = await uploadImageToStorage(base64Image);
        if (imageUrl) {
          // Thay thế chuỗi base64 bằng URL của hình ảnh đã tải lên
          newContent = newContent.replace(base64Image, imageUrl);
        }
      }
    }

    // Mã hóa nội dung blog
    const encryptedContent = CryptoJS.AES.encrypt(
      newContent,
      "your-secret-key"
    ).toString();

    try {
      // Lưu nội dung đã mã hóa vào Firestore
      const docRef = await addDoc(collection(db, "blogs"), {
        content: encryptedContent,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  return (
    <div>
      <h2>Soạn thảo Blog</h2>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={modules}
        theme="snow"
      />
      <button onClick={saveBlogToFirebase}>Lưu Blog</button>
    </div>
  );
};

export default Blog;
