import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Note = ({ note }: { note: Note }) => {
  return (
    <div>
      <Card className="w-full max-w-sm my-2">
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>{note.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Note;
