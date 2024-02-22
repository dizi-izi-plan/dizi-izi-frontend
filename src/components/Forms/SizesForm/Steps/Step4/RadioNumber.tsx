import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';

type RadioNumberProps = {
  value: number;
};

export const RadioNumber = ({ value }: RadioNumberProps) => {
  const styles = {
    width: '44px',
    height: '44px',
    border: (theme: { palette: { black: { main: string } } }) =>
      `1px solid ${theme.palette.black.main}`,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
  };

  return (
    <Radio
      disableRipple
      value={value}
      icon={
        <Typography variant="body1" color="black.main" sx={styles}>
          {value}
        </Typography>
      }
      checkedIcon={
        <Typography variant="body1" color="black.main" sx={styles}>
          {value}
        </Typography>
      }
    />
  );
};
