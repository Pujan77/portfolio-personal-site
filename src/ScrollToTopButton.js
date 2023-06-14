import { ChevronUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      icon={<ChevronUpIcon />}
      onClick={scrollToTop}
      position="fixed"
      bottom="4"
      right="4"
      display={showButton ? 'block' : 'none'}
    />
  );
};
