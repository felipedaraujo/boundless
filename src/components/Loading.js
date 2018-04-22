import React from 'react';

const Loading = props => {
  return (
    <div className="loader">
      <div className={`loader_line bg-${props.color}`} />
      <div className={`loader_line bg-${props.color}`} />
      <div className={`loader_line bg-${props.color}`} />
      <div className={`loader_line bg-${props.color}`} />
    </div>
  );
};

export default Loading;
