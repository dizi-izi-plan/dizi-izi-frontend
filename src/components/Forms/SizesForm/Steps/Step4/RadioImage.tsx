import Image from 'next/image';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { TRadioItem } from './step4FormData';

type RadioImageProps = {
  data: TRadioItem;
};

export const RadioImage = ({ data }: RadioImageProps) => {
  return (
    <FormControlLabel
      sx={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        rowGap: '10px',
      }}
      value={data.id}
      label={data.name}
      control={
        <Radio
          icon={
            <Image
              src={data.imageSrc}
              alt={data.name}
              style={{ borderRadius: '4px' }}
            />
          }
          checkedIcon={
            <Image
              src={data.imageSrc}
              alt={data.name}
              style={{ borderRadius: '4px' }}
            />
          }
          disableRipple
        />
      }
    />
  );
};
