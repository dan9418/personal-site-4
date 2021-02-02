import React from 'react';
import { useMediaQuery } from 'react-responsive';

const BREAK_POINT = 512;

export const useIsMobile = useMediaQuery({ query: `(min-width: ${BREAK_POINT}px)` });

export const Mobile = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? null : children;
};
