
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-peregrinos-text/80">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default Header;
