import { Button, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import LogoutIcon from '@mui/icons-material/Logout';

import { LogInOut } from '../../rtk/auth/authSlice';

const AuthButton = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.persistedReducer.auth);

  const handleLoginLogout = () => {
    dispatch(LogInOut());
  };



  return (
    <Box className="flex flex-col">
      <Button
        variant="contained"

        // color={isLoggedIn ? 'secondary' : 'primary'}
        onClick={handleLoginLogout}
        className='!mb-8 !bg-gradient-to-r from-teal-400 to-cyan-500'
      >
        {isLoggedIn ? <LogoutIcon /> : 'Log In'}
      </Button>

    </Box>
  );
};

export default AuthButton;
