import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "I was getting kinda used to be someone you loved, now the day ...",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "I was getting kinda used to be someone you loved, now the day ...",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "I was getting kinda used to be someone you loved, now the day ...",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => {
          return <Card data={item} reference={ref} />;
        })}
      </div>
    </>
  );
}

export default Foreground;
