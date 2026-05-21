"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Wrapper around next/image that fades the image in over 700ms once
 * the browser reports it as loaded. Skip on images marked priority —
 * those are pre-fetched and should appear instantly.
 */
export default function FadeImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(props.priority ?? false);

  // For priority images we don't want a fade — they're already in cache
  if (props.priority) {
    return <Image {...props} />;
  }

  return (
    <Image
      {...props}
      data-fade=""
      data-loaded={loaded ? "true" : "false"}
      onLoad={(e) => {
        setLoaded(true);
        props.onLoad?.(e);
      }}
    />
  );
}
