import SkeletonS from '../common/Skeleton';
import { Typography } from '@mui/material';

const LoadingHandler = ({ loading, error, children }) => {

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

  if (error) {
    return (
      <Typography>Error: {error}</Typography>
    )
  }

  if (children.length === 0) {
    return (
      <Typography>No announcements yet</Typography>
    )
  }

  return <div>{children}</div>
}

export default LoadingHandler