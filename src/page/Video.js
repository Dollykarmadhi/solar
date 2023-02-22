import React, { useEffect, useRef } from "react";

const Video = () => {
  
    return (
        <>
            <div
                className="video mt-5"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    // paddingTop: 25,
                    height: 0
                }}
            >
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={'https://www.reecosys.com/assets/uploads/home/banner/banner_web_1673524847_7_29.mp4'}
                />
            </div>

            

        </>
    )
}
export default Video;