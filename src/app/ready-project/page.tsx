import ProjectNavbar from '@/components/ProjectNavbar/ProjectNavbar';
import ProjectPlan from '@/components/ProjectPlan/ProjectPlan';
import { Box, Stack } from '@mui/material';

const page = () => {
  return (
    <Stack justifyContent="center" alignContent="center">
      <ProjectNavbar title={'Проект 1'}></ProjectNavbar>
      <Box>
        <ProjectPlan
          title="План расстановки мебели"
          img="/assets/icons/zaglushka/zaglushkaBedroom.svg"
          alt="ZaglushkaSpalnya"
        />
        <ProjectPlan
          title="План электроточек"
          img="/assets/icons/zaglushka/zaglushkaElectro.svg"
          alt="ZaglushkaElectro"
        />
      </Box>
    </Stack>
  );
};

export default page;
