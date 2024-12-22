import { Box, Typography, Button } from '@mui/material';
import useQuizizz from '../../hooks/useQuizizz';
import LoadingHandler from '../common/Loading';
import AssignmentIcon from '@mui/icons-material/Assignment';


function QuizizzList() {
  const { quizizz, loading, quizizzError } = useQuizizz();

  return (
    <Box className="bg-white rounded-lg p-6">
      <Box className="flex justify-between items-center mb-4">
        <Typography className="text-lg font-semibold">Courses' Assessments</Typography>
        <Button className="!text-teal-500 hover:text-teal-600">View All</Button>
      </Box>
      <Box className="space-y-4">
        <LoadingHandler loading={loading} error={quizizzError}>
          {quizizz.map((quizizz, index) => (
            <Box key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
              <Box className="flex items-center space-x-4">
                <Box className="bg-teal-50 p-2 rounded-lg">
                  <AssignmentIcon className="h-6 w-6 text-teal-500" />
                </Box>
                <Box>
                  <Typography className="font-medium">{quizizz.title}</Typography>
                  <Typography className="text-sm text-gray-500">{quizizz.description} || No Description</Typography>
                </Box>
              </Box>
              <Box className="flex items-center space-x-4">
                <Box className="flex items-center text-gray-500">
                  <Typography className="text-sm"> '23 Dec 2023'</Typography>
                </Box>
                <Button className="px-4 py-1 text-sm bg-teal-50 !text-teal-600 rounded-full hover:bg-teal-100">
                  Start
                </Button>
              </Box>
            </Box>
          ))}
        </LoadingHandler>
      </Box>
    </Box>

  )


}

export default QuizizzList;