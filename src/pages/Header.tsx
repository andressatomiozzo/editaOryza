import React from 'react'
import { useLanguageContext } from '../hooks/LanguageContext';

const Header = () => {
    const { t, language, setLanguage } = useLanguageContext();
  return (
    <div>
      <h1>{t.hero.title}</h1>
    </div>
  )
}

export default Header
