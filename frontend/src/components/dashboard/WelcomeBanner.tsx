import { Box, Typography, Button } from '@mui/material'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const WelcomeBanner = () => {
  return (
    <Box className="bg-white rounded-lg p-6 mb-6">
      <Box className="flex justify-between items-start">
        <Box>
          <Typography className="!text-4xl !font-extrabold !bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">EXAMS TIME</Typography>
          <Typography className="text-gray-600 mt-2">
            Here we are, Are you ready to fight? Don't worry, we prepared some tips to
            be ready for your exams.
          </Typography>
          <Box className="mt-4 text-gray-500 italic">
            "Nothing happens until something moves" - Albert Einstein
          </Box>
          <Button className="!mt-4 !p-2 !bg-gradient-to-r from-teal-400 to-cyan-500 !text-white px-6 py-2 rounded-lg  transition-colors ">
            View exams tips
          </Button>
        </Box>
        <Box className="flex-shrink-0">
          <ImportContactsIcon className="h-32 w-32 text-teal-500 opacity-50" />
        </Box>
      </Box>
    </Box>
  )
}

export default WelcomeBanner