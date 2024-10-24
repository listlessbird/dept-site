import { DateCard } from "@/components/date";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

type EventCalenderProps = {
  title: string;
  description: string;
  date: { day: string; month: string; year: string };
};

const parseDate = (date: { day: string; month: string; year: string }) => {
  const monthMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  return new Date(
    parseInt(date.year),
    monthMap[date.month],
    parseInt(date.day),
  );
};

export function EventCalender({ events }: { events: EventCalenderProps[] }) {
  const [startIndex, setStartIndex] = useState(0);

  // Sort events by date
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Most recent first
    });
  }, [events]);

  const visibleEvents = sortedEvents.slice(startIndex, startIndex + 2);
  const canScrollUp = startIndex > 0;
  const canScrollDown = startIndex + 2 < sortedEvents.length;

  const handleScrollUp = () => {
    if (canScrollUp) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleScrollDown = () => {
    if (canScrollDown) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 flex-1 relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleEvents.map((event, index) => (
            <motion.div
              key={`${event.title}-${startIndex + index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <EventCalenderItem {...event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleScrollUp}
            disabled={!canScrollUp}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleScrollDown}
            disabled={!canScrollDown}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function EventCalenderItem({ date, description, title }: EventCalenderProps) {
  return (
    <motion.div
      className="flex flex-1"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <DateCard date={date} />
      <div className="bg-red-50 p-2 rounded-md flex-1">
        <h3 className="italic text-lg font-bold text-pretty">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
