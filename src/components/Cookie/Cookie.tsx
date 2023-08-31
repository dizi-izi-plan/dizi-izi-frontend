'use client';

import { useState, useEffect } from 'react';
import { InfoModal } from '@/components/InfoModal';
import {
  COOKIE_MODAL_ID,
  CookieContent,
} from '@/components/Cookie/CookieModalContent';

const COOKIE_CONSENT_KEY = 'cookieConsent';

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
        minWidth="275"
        hideBackdrop
        open={isModalOpen}
        aria-describedby={COOKIE_MODAL_ID}
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        <>
          <CookieContent onClose={handleCloseModal} />
        </>
      </InfoModal>
    )
  );
};
