import AuthButton from "../components/common/AuthButton";
import { useAppSelector } from "../rtk/hooks";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Link } from "react-router";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { Box, Button } from "@mui/material";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { isLoggedIn } = useAppSelector((state) => state.persistedReducer.auth);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <CssBaseline />
      <Container className="flex flex-col items-center justify-center h-screen text-center " fixed>
        <div className=''>
          <Button onClick={() => changeLanguage('ar')}>عربي</Button>
          <Button onClick={() => changeLanguage('en')}>English</Button>
        </div>
        <Typography className="!mb-8">
          {t('welcome')}
        </Typography>
        <AuthButton />
        {isLoggedIn && (
          <Box>
            <Link to="/dashboard">Dashboard < DashboardIcon /></Link>
          </Box>)}
      </Container >
    </>

  )
}

export default Home
