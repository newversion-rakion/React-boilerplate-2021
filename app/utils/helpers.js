import { useRef, useEffect } from 'react';
import queryString from 'query-string';
import history from 'utils/history';
import { useLocation } from 'react-router-dom';

export const openExternalLink = link => {
  if (link.includes('http')) {
    window.open(link, '_blank');
  } else {
    window.open(`https://${link}`, '_blank');
  }
};

export const useSearchQuery = () => queryString.parse(useLocation().search);

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const isAuthenticated = () => localStorage.getItem('token');

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        (event.target.closest('button') &&
          event.target.closest('button').classList.contains('btnToggleMenu'))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export const isIOS = () =>
  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform) ||
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

export const logout = () => {
  localStorage.clear();
  history.push('/login');
};

export const renderUiByRole = conditionRoles => {
  let result = false;
  const currentRoles = JSON.parse(localStorage.getItem('user_roles'));
  currentRoles.map(role => {
    conditionRoles.map(conditionRole => {
      if (role.toString() === conditionRole.toString()) {
        result = true;
      }
    });
  });
  return result;
};

export const toLocaleString = number => {
  if (number) {
    const cloneNumber = +number;
    return cloneNumber.toLocaleString();
  }
  return '';
};
