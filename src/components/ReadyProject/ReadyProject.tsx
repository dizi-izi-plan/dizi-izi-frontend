'use client';
import { Box } from '@mui/material';
import React from 'react';
import ProjectNavbar from '../ProjectNavbar/ProjectNavbar';
import ProjectPlan from '../ProjectPlan/ProjectPlan';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';

const ReadyProject = () => {
  useProtectedRoute();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      width="100%"
    >
      <ProjectNavbar title="Проект 1"></ProjectNavbar>
      <Box display="flex" flexDirection="column">
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
    </Box>
  );
};

export default ReadyProject;
