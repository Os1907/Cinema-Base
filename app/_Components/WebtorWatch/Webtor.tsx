'use client';

import React, { useEffect, useRef, useState } from 'react';
import CommentList from '../Reviews/Reviews';


interface IProp {
  sourceLink: string,
  posterImage: string,
  comments: Array<any>
}
function extractMagnet(url: string): string | null {
  const hashRegex = /download\/([a-f0-9]{40})/;
  const match = url.match(hashRegex);

  if (match && match[1]) {
    return `magnet:?xt=urn:btih:${match[1]}`;
  } else {
    const magnetLink = url.split('btih:')[1];
    return magnetLink ? `magnet:?xt=urn:btih:${magnetLink}` : null;
  }
}

const Webtor = ({ sourceLink, posterImage, comments }: IProp) => {
  const [magnetLink, setMagnetLink] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const link = extractMagnet(sourceLink.toLowerCase() || '');
    setMagnetLink(link);
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@webtor/player-sdk-js/dist/index.min.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [sourceLink]);

  return (
    <div className="relative z-[9999]  min-h-screen w-full flex flex-col items-center justify-center overflow-hidden  ">
      {magnetLink ? (
        <>
          <div className='   bg-white bg-opacity-20  borderGlass rounded-xl py-1 px-5 lg:px-10 mb-2 '>
            <p className='text-white   text-center text-sm lg:text-base '>If the movie does not work we recommend you to back and choose a different link .Thank you!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-5 ">

            <div className="rounded-2xl border-3xl border-white col-span-1  iframeEditing  w-full  ">
              <video

                ref={videoRef}
                controls
                src={magnetLink}
                poster={posterImage}
                //  width={720}
                height={420}
                // className="w-full h-auto object-cover"
                className= "aspect-video "
              />
            </div>

            <div className="col-span-1 ">

              <CommentList comments={comments} />
            </div>

          </div>
        </>
      ) : (
        <span className="loader mt-20 " />
      )}

    </div>
  );
};

export default Webtor;

