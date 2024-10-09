import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const events = [
  { id: 1, title: "Annual Tech Conference" },
  { id: 2, title: "Summer Music Festival" },
  { id: 3, title: "Food and Wine Expo" },
  { id: 4, title: "International Film Premiere" },
  { id: 5, title: "Startup Pitch Competition" },
];

// Define an array of background colors for debugging
const debugColors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
];

export function StackedEventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length,
    );
  };

  const getVisibleEvents = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % events.length;
      result.push({ ...events[index], displayIndex: i });
    }
    return result;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[400px]">
      <div className="absolute inset-0 carousel-root">
        {getVisibleEvents().map((event, index) => (
          <Card
            key={event.id}
            className={cn(
              "absolute inset-x-0 flex items-center justify-center text-2xl font-bold text-muted-foreground h-[300px] w-full transition-all duration-300 ease-in-out",
              debugColors[index],
              "c-item",
            )}
            style={{
              top: `${index * 30}px`,
              zIndex: 3 - index,
              transform: `translateZ(${(2 - index) * -30}px) scale(${1 - index * 0.05})`,
            }}
          >
            <CardContent>
              <p>{event.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-4">
        <Button onClick={prevSlide} variant="outline" size="icon">
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button onClick={nextSlide} variant="outline" size="icon">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}