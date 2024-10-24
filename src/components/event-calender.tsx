import { DateCard } from "@/components/date";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type EventCalenderProps = {
  title: string;
  description: string;
  date: { day: string; month: string; year: string };
};

export function EventCalender({ events }: { events: EventCalenderProps[] }) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 flex-1">
        {events.map((event) => (
          <EventCalenderItem {...event} />
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button variant="outline" size="icon" className="rounded-full">
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function EventCalenderItem({ date, description, title }: EventCalenderProps) {
  return (
    <div className="flex flex-1">
      <DateCard date={date} />
      <div className="bg-red-50 p-2 rounded-md flex-1">
        <h3 className="italic text-lg font-bold text-pretty">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
