import React, { useRef } from "react";

export default function Editor({ currentDoc, setCurrentDoc, saveDoc, shareDoc }) {
  const fileInputRef = useRef(null);

  if (!currentDoc)
    return (
      <div className="w-3/4 flex items-center justify-center text-gray-400 text-lg">
        Select a document to start editing
      </div>
    );

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      setCurrentDoc({ ...currentDoc, content: evt.target.result });
    };
    reader.readAsText(file);
  };

  return (
    <div className="w-3/4 p-6 flex flex-col gap-5">
      {/* Title */}
      <input
        value={currentDoc.title}
        onChange={(e) => setCurrentDoc({ ...currentDoc, title: e.target.value })}
        placeholder="Document Title"
        className="text-3xl font-bold border-b-2 border-gray-300 outline-none pb-3 placeholder-gray-400"
      />

      {/* Upload File */}
      <div>
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition mb-2"
        >
          Upload File (.txt, .md)
        </button>
        <input
          type="file"
          accept=".txt,.md"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Content Area */}
      <textarea
        value={currentDoc.content}
        onChange={(e) => setCurrentDoc({ ...currentDoc, content: e.target.value })}
        placeholder="Start writing here..."
        className="border rounded p-4 h-[600px] resize-none text-lg focus:outline-indigo-500 shadow-sm"
      />

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={saveDoc}
          className="bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600 transition font-medium"
        >
          Save
        </button>
        <button
          onClick={shareDoc}
          className="bg-purple-500 text-white px-5 py-3 rounded hover:bg-purple-600 transition font-medium"
        >
          Share
        </button>
      </div>
    </div>
  );
}