// import React, { Suspense, useEffect, useMemo } from 'react';
// import { Helmet, HelmetProvider } from '@vuer-ai/react-helmet-async';
// // import './index.scss';
// import {
//   SimpleComponent,
//   AmbientLight,
//   Grid,
//   Hands,
//   PlaybackBar,
//   PlaybackProvider,
//   PointLight,
//   ResizableSwitch,
//   WebSocketProvider,
//   Timeline,
//   SceneContainer,
//   // MuJoCoProvider,
//   useSocket,
//   Combine,
//   PlaybackStateProvider,
//   usePlayback,
//   TimelineStateProvider,
// } from '@vuer-ai/vuer';
//
// function AppView() {
//   const playback = usePlayback();
//   const { downlink } = useSocket();
//
//   useEffect(() => {
//     const cancel = [
//       downlink.subscribe('SET', playback.addKeyFrame),
//       downlink.subscribe('ADD', playback.addKeyFrame),
//       downlink.subscribe('UPDATE', playback.addKeyFrame),
//       downlink.subscribe('UPSERT', playback.addKeyFrame),
//       downlink.subscribe('REMOVE', playback.addKeyFrame),
//     ];
//
//     return () => {
//       cancel.forEach((f) => f());
//     };
//   }, [playback, downlink]);
//
//   const combinedStream = useMemo(
//     () => new Combine(downlink, playback.store),
//     [downlink, playback.store],
//   );
//
//   return (
//     <PlaybackStateProvider>
//       <ResizableSwitch
//         offset={-200}
//         minOffset={48}
//         vertical
//         style={{
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         <SceneContainer
//           frameloop="always"
//           stream={combinedStream}
//           bgChildren={[<Grid key="default-grid" _key="default-grid" />]}
//         >
//           <AmbientLight key="ambient" intensity={0.25} />
//           <PointLight key="spot" intensity={1} position={[0, 1, 1]} />
//           <Hands fps={30} eventType={['squeeze']} stream />
//         </SceneContainer>
//         <TimelineStateProvider>
//           <PlaybackBar />
//           <Timeline />
//         </TimelineStateProvider>
//         <PlaybackBar />
//       </ResizableSwitch>
//     </PlaybackStateProvider>
//   );
// }
//
// export default function Page() {
//   const isSSR = typeof window === 'undefined';
//
//   return (
//     <HelmetProvider>
//       <Helmet>
//         <title>Vuer | Stereo Video and WebRTC Demo</title>
//       </Helmet>
//       <main>
//         <Suspense fallback={<div>Loading...</div>}>
//           <SimpleComponent />
//           {isSSR ? null : (
//             <WebSocketProvider>
//               <PlaybackProvider>
//                   <AppView />
//               </PlaybackProvider>
//             </WebSocketProvider>
//           )}
//         </Suspense>
//       </main>
//     </HelmetProvider>
//   );
// }

export default function Page() {
  return <div>editor placeholder</div>
}