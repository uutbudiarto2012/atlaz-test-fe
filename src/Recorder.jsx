import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder";

const Recorder = () => {

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: false });
  return (
    <div>
      <p>{status}</p>
      <div style={{ display:'flex', gap:3 }}>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>

      </div>
      {
        mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay />
      }
      {/* <video src={} controls autoPlay loop /> */}
    </div>
  )
}

export default Recorder