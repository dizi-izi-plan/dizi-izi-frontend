import { ChangeEvent } from 'react';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';

export type RadioType = {
  label: string;
  value: string;
};

export type ControlledInputProps<T extends FieldValues> = RadioGroupProps &
  UseControllerProps<T> & {
    radios?: RadioType[];
    errorMessage?: string;
    groupSx?: Record<string, string | number>;
    labelSx?: Record<string, string | number>;
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  };

export const RadioGroupWrapper = <T extends FieldValues>({
  radios,
  errorMessage,
  className,
  groupSx,
  labelSx,
  row,
  onChangeHandler,
  ...props
}: ControlledInputProps<T>) => {
  const { field } = useController(props);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    field.onChange(value);

    if (onChangeHandler) onChangeHandler(e);
  };

  return (
    <>
      {!radios && (
        <Box>
          <RadioGroup {...field} {...props} />
          <FormHelperText
            sx={{
              color: 'error.main',
            }}
          >
            {errorMessage}
          </FormHelperText>
        </Box>
      )}

      {radios && radios.length > 0 && (
        <Box minWidth="fit-content">
          <FormControl sx={{ width: '100%' }}>
            <RadioGroup
              {...field}
              {...props}
              row={row}
              sx={groupSx}
              onChange={onChange}
            >
              {radios.map(({ value, label }, indx) => (
                <FormControlLabel
                  key={indx}
                  value={value}
                  control={<Radio />}
                  label={label}
                  className={className}
                  sx={labelSx}
                />
              ))}
            </RadioGroup>
            <FormHelperText
              sx={{
                color: 'error.main',
              }}
            >
              {errorMessage}
            </FormHelperText>
          </FormControl>
        </Box>
      )}
    </>
  );
};
