'use client';

import { useState, useEffect } from 'react';
import { InfoModal } from '@/components/InfoModal';
import {
  COOKIE_MODAL_ID,
  CookieContent,
} from '@/components/Cookie/CookieModalContent';

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_MINWIDTH = '275px';

export const Cookie = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      setModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setModalOpen(false);
  };

  return (
    isModalOpen && (
      <InfoModal
        minWidth={COOKIE_MINWIDTH}
        hideBackdrop
        open={isModalOpen}
        aria-describedby={COOKIE_MODAL_ID}
        sx={{
          p: 1,
          width: 'fit-content',
          height: 'fit-content',
          top: '50%',
        }}
      >
        <>
          <CookieContent onClose={handleCloseModal} />
        </>
      </InfoModal>
    )
  );
};
