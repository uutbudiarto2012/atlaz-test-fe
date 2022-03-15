import html2canvas from 'html2canvas';
import React from 'react';
import { ReactMediaRecorder } from "react-media-recorder";

const Screenshoot = () => {
  const screenshotTarget = document.getElementById('target');

  const handleSS = () => html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    console.log(base64image);
  });
  return (
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />

            <audio controls>
              <source src={mediaBlobUrl} type="audio/wav" />
            </audio>

            {
              console.log(mediaBlobUrl)
            }

          </div>
        )}
      />
    </div>
    // <>
    //   <div id="target">
    //     <h1>HALOO</h1>
    //     {/* <iframe width="956" height="538" src="https://www.youtube.com/embed/E7R1gX-pEAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    //     <iframe width="956" height="538" src="https://academy.hiatlaz.com/wp-content/uploads/altaz-content/book1/unit1/creative-space-a/" ></iframe>
    //   </div>
    //   <button onClick={handleSS}>SS</button>
    // </>
    // <div>
    //   <div>
    //     <button style={{ marginBottom: '10px' }} onClick={getImage}>
    //       Take screenshot
    //     </button>
    //   </div>
    //   {/* <iframe width="956" height="538" src="https://www.youtube.com/embed/E7R1gX-pEAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    //   <div ref={ref}>
    //     <h1>use-react-screenshot</h1>
    //     <p>
    //       <strong>hook by @vre2h which allows to create screenshots</strong>
    //     </p>
    //   </div>
    // </div>
  )
}

export default Screenshoot