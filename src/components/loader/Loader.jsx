// import { Html, useProgress } from '@react-three/drei'
// const Loader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html center className='text-2xl font-normal text-center'>
//       {progress}
//       % Loaded</Html>
//   )
// }

// export default Loader



// 'use client';

// import * as React from 'react';
// import { Progress } from '@/components/ui/progress';

// export default function Loader() {
//   const [progress, setProgress] = React.useState(13);

//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="w-full max-w-md">
//       <Progress value={progress} />
//     </div>
//   );
// }


const Loader = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Loading .......
    </div>
  )
}

export default Loader