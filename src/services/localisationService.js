import en from '../langs/en'
import es from '../langs/es'

const languages = {
    en,
    es
};

let defaultLanguage = window.navigator.language === 'en' ? 'en' : 'es';

window.i18nData = languages[defaultLanguage];


window.changeLanguage = (lang) => {
 
     window.i18nData = languages[lang];
    
}