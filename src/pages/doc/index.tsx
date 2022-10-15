/*
 * @Author: TTFZippo
 * @Date: 2022-10-15 20:07:00
 * @LastEditors: TTFZippo
 * @LastEditTime: 2022-10-15 21:35:53
 * @Description: 
 */
import { FC, useState } from "react";
import styles from './index.module.scss';
import Editor from '../../components/editor'

const Doc: FC = () => {
  const [state1, setState1] = useState(1);
  return (
    <div className={styles.doc}>
      <>
        {/* {state1} */}
        <Editor></Editor>
        this is a doc
        <div id="editor">
        <div id="content"></div>
    </div>
      </>
    </div>
  )
};

export default Doc;