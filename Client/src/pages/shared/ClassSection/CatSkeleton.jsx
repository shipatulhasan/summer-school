import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CatSkeleton = ({cat}) => {
    return (
      Array(cat).fill(0).map((ite,i) =><div key={i}>
          <Skeleton height={320} />
        </div>
      )
    );
};

export default CatSkeleton;