import React from 'react';

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ isLoading, ...props }: P & { isLoading: boolean }) => {
    if (isLoading) return <div>Loading...</div>;
    return <Component {...(props as P)} />;
  };
};

export default withLoading;