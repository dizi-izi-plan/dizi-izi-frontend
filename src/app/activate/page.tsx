'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { useActivateUserMutation, useGetUserDataQuery } from '@/api/apiSlice';
import Button from '@mui/material/Button';

export default function ActivateUser({
  params,
}: {
  params: { token: string; uid: string };
}) {
  const router = useRouter();
  const [activateUser, { isLoading, data }] = useActivateUserMutation();
  const userData = useGetUserDataQuery('');

  const handleClick = async () => {
    const data = {
      uid: 'MWRkZDU0MGQtZGNhYy00N2U4LWIyNmQtYjNiYjM1OWJhNzY3',
      token: 'cb2z75 - ef5167e744688bffb42e479dcc95f9b2',
    };

    // const response = await fetch(
    //   'https://diziizi.ru/api/v1/auth/users/activation',
    //   {
    //     method: 'POST',
    //     headers: {
    //       contentType: 'application/json',
    //       mode: 'no-cors',
    //     },
    //     body: JSON.stringify(data),
    //   },
    // );

    const response = await activateUser(data).unwrap();

    console.log(data);
    console.log(response);
  };

  const getData = () => {
    console.log(userData);
  };

  // useEffect(() => {
  //   try {
  //     activateUser({
  //       uid: params.uid,
  //       token: params.token,
  //     }).unwrap();
  //     // .then((res) => {
  //     //   console.log(res);
  //     //   if (res.status === 204) {
  //     //     console.log(data);
  //     //     // router.push('/confirm-registration-message');
  //     //   }
  //     // });
  //   } catch (error) {
  //     console.error(error);
  //     router.back();
  //   }
  // }, []);

  if (isLoading) return <CircularProgress color="inherit" />;

  return (
    <>
      <Button onClick={handleClick}>Send code</Button>
      <Button onClick={getData}>get data</Button>
      <div>Page token: {params.token}</div>
      <div>id: {params.uid}</div>
    </>
  );
}
