import React from 'react';
function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<h1>Be Hold, fetching data may take some time :)</h1>);
  }
}
export default Loading;