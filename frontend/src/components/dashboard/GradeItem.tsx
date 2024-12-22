import ImportContactsIcon from '@mui/icons-material/ImportContacts';

interface GradeItemProps {
  course: string;
  type: string;
  topic: string;
  grade: string;
  average: string;
}

export function GradeItem({ course, type, topic, grade, average }: GradeItemProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center space-x-2 mb-1">
        <ImportContactsIcon className="h-4 w-4 text-teal-500" />
        <span className="font-medium">{course} | {type}</span>
      </div>
      <div className="text-sm text-gray-600 mb-2">{topic}</div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs text-gray-500">Your Grade</div>
          <div className="font-semibold">{grade}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Class Average</div>
          <div className="font-semibold">{average}</div>
        </div>
      </div>
    </div>
  );
}