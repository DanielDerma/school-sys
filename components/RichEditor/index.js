import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function RichEditor({ addSave, getRawContent }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  useEffect(() => {
    if (addSave) {
      getRawContent(convertToRaw(editorState.getCurrentContent()));
    }
  }, [addSave]);

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        editorStyle={{
          minHeight: "500px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}
