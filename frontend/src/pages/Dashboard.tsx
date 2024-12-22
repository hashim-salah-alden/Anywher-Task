import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Sidebar from "../components/dashboard/Sidebar"
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import Announcements from '../components/dashboard/Announcements';
import QuizizzList from '../components/dashboard/Quizizz';
import { DueItem } from '../components/dashboard//DueItem';
import { GradeItem } from '../components/dashboard/GradeItem';

const dueItems = [
  {
    type: 'Unit 2 quiz',
    course: 'Physics 02',
    topic: 'Unit2: Motion and forces',
    dueDate: '20 Dec 2023 - 09:00 PM',
    actionLabel: 'Start Quiz'
  },
  {
    type: '12-12 Assignment',
    course: 'Arabic K12',
    topic: 'الوحدة الثانية - الأمثال',
    dueDate: '20 Dec 2023 - 09:00 PM',
    actionLabel: 'Solve Assignment'
  }
];


const grades = [
  {
    course: 'Math 101',
    type: 'Quiz',
    topic: 'Unit 2: Add and subtract numbers',
    grade: '18/20',
    average: '13.5/20'
  },
  {
    course: 'Physics 01',
    type: 'Assignment',
    topic: 'Introduction about physics',
    grade: '15/20',
    average: '14/20'
  }
];


const Dashboard = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2, mt: "60px" }}>
      <Sidebar />

      {/* Main Content */}
      <Grid item md={7}>
        <Grid container spacing={2}>
          {/* Welcome Banner */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <WelcomeBanner />
            </Paper>
          </Grid>

          {/* Announcements */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Announcements</Typography>
              <Announcements />
            </Paper>
          </Grid>

          {/* My Courses */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">My Courses</Typography>
              <QuizizzList />
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Panel */}
      <Grid item md={3}>
        <Grid container spacing={2}>
          {/* What's Due */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              {dueItems.map((item, index) => (
                <DueItem key={index} {...item} />
              ))}
            </Paper>
          </Grid>

          {/* Latest Grades */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              {grades.map((grade, index) => (
                <GradeItem key={index} {...grade} />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Dashboard