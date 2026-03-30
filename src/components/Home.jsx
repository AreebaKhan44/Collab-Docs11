import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import axios from "axios";

const USER = "user1@test.com";

export default function Home() {
  const [docs, setDocs] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(null);

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/docs/${USER}`);
      setDocs(res.data);
    } catch (e) {
      console.error("Failed to fetch docs", e);
    }
  };

  const createDoc = async () => {
    const newDoc = { _id: Date.now(), title: "Untitled Document", content: "" };
    setDocs([...docs, newDoc]);
    setCurrentDoc(newDoc);
  };

  const saveDoc = async () => {
    alert("Document saved!");
  };

  const shareDoc = async () => {
    const email = prompt("Enter email to share with:");
    if (email) alert(`Document shared with ${email}`);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      fontFamily: "-apple-system, 'Segoe UI', sans-serif",
      background: "#0f0c29",
      overflow: "hidden",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      position: "fixed",
      top: 0,
      left: 0,
    }}>
      <Navbar />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar
          docs={docs}
          setCurrentDoc={setCurrentDoc}
          createDoc={createDoc}
          currentDoc={currentDoc}
        />
        <Editor
          currentDoc={currentDoc}
          setCurrentDoc={setCurrentDoc}
          saveDoc={saveDoc}
          shareDoc={shareDoc}
        />
      </div>
    </div>
  );
}
