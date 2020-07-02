import React, { useState, Suspense } from "react";

const LazyComponent = React.lazy((/* webpackChunkName: "LazyComponent" */) => import('../components/LazyComponent'));

import styles from './styles'

export default function App() {
  const [load, setLoad] = useState(null);

  return (
    <>
      <div className={ styles.logo } />
      <div className={ styles.test }>
        test
        { load
          ? <Suspense fallback={ <span>w8</span> }><LazyComponent/></Suspense>
          : <button className={ styles.test__button } onClick={ () => setLoad(true)}>load component</button>
        }
      </div>
    </>
  );
}
