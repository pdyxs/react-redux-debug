import React from 'react';

const DEBUG = true;

export default function withName(name) {
  if (DEBUG) {
    return function(Component) {
      function WithName(props) {
        return <Component {...props} />;
      }

      WithName.displayName = `${name}(${Component.displayName || Component.name}`;
      return WithName;
    }
  } else {
    return (Component) => (Component);
  }
}
