import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Cookie } from '@/components/Cookie/Cookie';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          backgroundColor: 'primary.contrastText',
        }}
      >
        <Container maxWidth="lg">
          <Cookie />
        </Container>
      </Box>
    </main>
  );
}
