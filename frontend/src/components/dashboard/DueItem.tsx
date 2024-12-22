import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Button, Typography } from '@mui/material';

interface DueItemProps {
  type: string;
  course: string;
  topic: string;
  dueDate: string;
  actionLabel: string;
}

export function DueItem({ type, course, topic, dueDate, actionLabel }: DueItemProps) {
  return (
    <Box className="mb-4 last:mb-0">
      <Box className="flex items-center justify-between mb-1">
        <Typography className="text-sm font-medium">{type}</Typography>
      </Box>
      <Box className="text-sm text-gray-600">Course: {course}</Box>
      <Box className="text-sm text-gray-600">Topic: {topic}</Box>
      <Box className="flex items-center justify-between mt-2">
        <Box className="flex items-center text-gray-500 text-sm">
          <AccessTimeIcon className="h-4 w-4 mr-1" />
          <Typography>Due to: {dueDate}</Typography>
        </Box>
        <Button className="px-4 py-1 text-sm !bg-gradient-to-r from-teal-400 to-cyan-500 !text-slate-100 rounded-full hover:bg-teal-600">
          {actionLabel}
        </Button>
      </Box>
    </Box>
  );
}