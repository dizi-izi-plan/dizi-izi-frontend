'use client';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import {
  addBedroomFocusedField,
  deleteBedroomFocusedField,
} from '@/redux/slices/focusedFields-slice';

export const useFocusedObject = (currentFieldName: string) => {
  const dispatch = useAppDispatch();
  const [isHovered, setHovered] = useState<boolean>(false);
  const [isFocused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered || isFocused) {
      dispatch(addBedroomFocusedField(currentFieldName));
    } else {
      dispatch(deleteBedroomFocusedField());
    }
  }, [dispatch, isFocused, currentFieldName, isHovered]);

  const handleSetFocused = useCallback(
    (val: boolean) => {
      if (val !== isFocused) setFocused(val);
    },
    [isFocused],
  );

  const handleSetHovered = useCallback(
    (val: boolean) => {
      if (val !== isHovered) setHovered(val);
    },
    [isHovered],
  );

  return { handleSetFocused, handleSetHovered };
};
