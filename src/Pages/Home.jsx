import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function Home(props) {
  const editorRef = useRef(null);
  const showPreview = () => {
    if (editorRef.current) {
      editorRef.current.execCommand("mcePreview");
    }
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Email Content Creator</h1>
        <div className="float-end">
          <button className="btn btn-sm btn-success" onClick={showPreview}>
            Preview
          </button>
        </div>
      </div>

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          paste_data_images: true,
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | image | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </React.Fragment>
  );
}

export default Home;
