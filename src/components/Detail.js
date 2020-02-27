import React, { Suspense, lazy } from 'react';
import {
    useParams
  } from "react-router-dom";

const Data = lazy(() => import('./DetailData'));

function Detail() {
    let { id } = useParams();
    return (
        <Suspense fallback={<div align="center"><h1>Loading...</h1></div>}>
            <Data id={ id } />
        </Suspense>
    )
}
export default Detail;