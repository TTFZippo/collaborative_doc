/*
 * @Author: TTFZippo
 * @Date: 2022-10-15 20:07:00
 * @LastEditors: TTFZippo
 * @LastEditTime: 2022-10-15 21:00:23
 * @Description: 
 */
import { FC, useState } from "react";
import styles from './index.module.scss';

const Doc: FC = () => {
  const [state1, setState1] = useState(1);
  return (
    <div className={styles.doc}>
      <>
        {state1}
        this is a doc
      </>
    </div>
  )
};

export default Doc;