import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

interface VideoRoomProps {
    name: string;
    roomID: string;
}

const VideoRoom: React.FC<VideoRoomProps> = ({ name, roomID }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const myMeeting = async (element: HTMLDivElement) => {
            const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
            const appSign = import.meta.env.VITE_ZEGO_APP_SIGN;

            console.log("DEBUG: AppID:", appID, typeof appID);
            console.log("DEBUG: AppSign:", appSign ? appSign.slice(0, 5) + "..." : "undefined", typeof appSign);

            if (!appID || isNaN(appID)) {
                console.error("CRITICAL: AppID is missing or invalid");
                alert("AppID is missing or invalid. Check .env file.");
                return;
            }
            if (!appSign) {
                console.error("CRITICAL: AppSign is missing");
                alert("AppSign is missing. Check .env file.");
                return;
            }

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                appSign,
                roomID,
                Date.now().toString(),
                name
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
            });
        };

        myMeeting(containerRef.current);
    }, [name, roomID]);

    return (
        <div
            className="video-container"
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
};

export default VideoRoom;
