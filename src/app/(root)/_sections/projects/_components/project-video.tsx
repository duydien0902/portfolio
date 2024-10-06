"use client";

import React from "react";

export default function ProjectVideo({
  videoUrl,
  thumbnail,
}: {
  videoUrl: string;
  thumbnail: string;
}) {
  return (
    <div className="w-full h-full overflow-hidden rounded-md">
      <video
        controls
        poster={thumbnail}
        className="w-full h-full object-contain"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
