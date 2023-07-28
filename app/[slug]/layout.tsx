import { ReactNode } from 'react';

import styles from './layout.module.css';

export default async function actView({ children, params: { slug } }: { children: ReactNode; params: { slug: string } }) {
  return <div className={styles.layout}>
    <div>This is the layout for {slug}</div>
    {children}
  </div>;
}