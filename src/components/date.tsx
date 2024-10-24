import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function DateCard({
  date,
}: {
  date: { day: string; month: string; year: string };
}) {
  return (
    <Card className="bg-zinc-300 p-2">
      <CardContent className="bg-red-50 py-4 px-6 text-center rounded-md">
        <p className="font-bold">{date.day}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-center px-6 pb-0">
        <p className="font-semibold">{date.month}</p>
        <p className="font-semibold text-sm">{date.year}</p>
      </CardFooter>
    </Card>
  );
}
