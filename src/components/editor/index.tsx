/*
 * @Author: TTFZippo
 * @Date: 2022-10-15 21:02:43
 * @LastEditors: TTFZippo
 * @LastEditTime: 2022-10-15 21:39:07
 * @Description: 
 */
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import { useEffect, useRef } from "react"


declare global {
  interface Window {
      view:any;
  }
}
// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.


const Editor = () => {
  console.log('document.querySelector("#editor")', document.querySelector("#editor"));
  const editorRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    });
    
    
    window.view = new EditorView(editorRef.current, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(contentRef.current as HTMLElement),
        plugins: exampleSetup({schema: mySchema})
      })
    });
  }, [])
  return (
    <>
      <div ref={editorRef}>
        <div ref={contentRef}></div>
      </div>
    </>
    // <div id="editor">
    //   <div id="content"></div>
    // </div>
  )
};

export default Editor;
