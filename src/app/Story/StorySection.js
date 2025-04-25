import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import StoryCard from "./StoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function StorySection() {
  const storyPost = [
    {
      _id: 1,
      mediaUrl: "https://localhost",
      mediaType: "video",
      user: {},
    },
    {
      _id: 2,
      mediaUrl: "https://localhost",
      mediaType: "video",
      user: {},
    },
  ];
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const containerRef = useRef();
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const updatedMaxScroll = () => {
        setMaxScroll(container.scrollWidth - container.offsetWidth);
        setScrollPosition(container.scrollLeft);
      };
      updatedMaxScroll();
      window.addEventListener("resize", updatedMaxScroll);
      return window.removeEventListener("resize", updatedMaxScroll);
    }
  }, [storyPost]);
  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : +200;
      container.scrollBy({ left: scrollAmount, behaviour: "smooth" });
    }
  };
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };
  return (
    <div className="relative">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-hidden py-4 space-x-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <motion.div
          className="flex space-x-2 "
          drag="x"
          dragConstraints={{
            right: 0,
            left:
              -((storyPost.length + 1) * 200) +
              containerRef.current?.offsetWidth,
          }}
        >
          <StoryCard isAddStory={true} />

          {storyPost?.map((story , index) => (
            <StoryCard story={story} story_id={story._id} key={index}/>
          ))}
        </motion.div>

        {/* {right side scroll} */}

        {scrollPosition > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg:white dark:bg-gray-800 shadow-lg
 transition-opacity duration-300 ease-in-out
"
            onClick={() => scroll("left")}
          >
            <ChevronLeft />
          </Button>
        )}

        {scrollPosition < maxScroll && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg:white dark:bg-gray-800 shadow-lg
transition-opacity duration-300 ease-in-out
"
            onClick={() => scroll("right")}
          >
            <ChevronRight />
          </Button>
        )}
      </div>
    </div>
  );
}

export default StorySection;
