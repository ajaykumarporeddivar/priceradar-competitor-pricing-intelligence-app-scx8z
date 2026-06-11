'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export function useFilter(arr: any[], criteria: any) {
  return arr.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]));
}

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
}

export function useDemoToast() {
  const [toast, setToast] = useState(false);

  const openToast = () => setToast(true);
  const closeToast = () => setToast(false);

  return { toast, openToast, closeToast };
}