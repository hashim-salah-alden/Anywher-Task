import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonS() {
  return (
    <Stack spacing={3} direction="row" className='mb-2'>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}




