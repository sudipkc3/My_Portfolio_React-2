import React, { lazy, Suspense } from 'react';

interface LottieIconProps {
  animationData: object;
  width?: number;
  height?: number;
  className?: string;
}

const LazyLottie = lazy(() => import('lottie-react'));

const LottieIcon: React.FC<LottieIconProps> = ({ animationData, width = 200, height = 200, className }) => {
  return (
    <div style={{ width, height }} className={className}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLottie 
          animationData={animationData} 
          loop={true} 
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} 
          className="fill-current text-pink-500" 
        />
      </Suspense>
    </div>
  );
};

export default LottieIcon;
