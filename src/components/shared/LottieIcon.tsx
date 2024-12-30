import React from 'react';
import Lottie from 'lottie-react';

interface LottieIconProps {
  animationData: object;
  width?: number;
  height?: number;
  className?: string;
}

const LottieIcon: React.FC<LottieIconProps> = ({ animationData, width = 200, height = 200, className }) => {
  return (
    <div style={{ width, height }} className={className}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} 
        className="fill-current text-pink-500" 
      />
    </div>
  );
};

export default LottieIcon;
