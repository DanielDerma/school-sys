import { useState } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from "draftjs-to-html";
let htmlToDraft = null;
if (typeof window === "object") {
  htmlToDraft = require("html-to-draftjs").default;
}

export default function RichEditor({ value, setFieldValue }) {
  const prepareDraft = (value) => {
    const draft = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };

  const [editorState, setEditorState] = useState(
    value ? prepareDraft(value) : EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
    setEditorState(editorState);
  };

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
