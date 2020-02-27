import React from 'react';
import '../css/App.css';
function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p className="Loading">Be Hold, fetching data may take some time :)</p>);
  }
}
export default Loading;