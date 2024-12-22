import useAnnouncements from '../../hooks/useAnnouncements';
import { Box, Typography, Button, Avatar } from '@mui/material';
import LoadingHandler from '../common/Loading';
import SkeletonS from '../common/Skeleton';

function AnnouncementList() {
  const { announcements, loading, announcementsError } = useAnnouncements()

  if (loading === "pending") {
    return (
      <>
        <SkeletonS />
        <SkeletonS />
        <SkeletonS />
        <SkeletonS />
      </>
    )
  }

  if (announcementsError) {
    return (
      <Typography>Error: {announcementsError}</Typography>
    )
  }

  if (announcements.length === 0) {
    return (
      <Typography>No announcements yet</Typography>
    )
  }

  if (announcements) {
    return (
      <Box className="bg-white rounded-lg shadow-md p-6">
        <Box className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Announcements</h2>
          <Button className="!text-[#4FD1C5]">All</Button>
        </Box>
        <Box className="space-y-4">
          <LoadingHandler loading={loading} error={announcementsError}>
            {announcements.map((announcement, index) => (
              <div key={index} className="flex space-x-4 p-4 border-b last:border-b-0">
                <Avatar className='!bg-teal-500'>N</Avatar>
                <Box>
                  <Box className="flex items-center space-x-2">
                    <Typography className="text-sm text-gray-500">{announcement.title}</Typography>
                  </Box>
                  <Typography className="text-gray-600 mt-1">{announcement.content}</Typography>
                </Box>
              </div>
            ))}
          </LoadingHandler>
        </Box>
      </Box>
    );
  }
}
export default AnnouncementList