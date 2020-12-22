import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App () {
    const { t, i18n } = useTranslation(['translation']);


    const changeLanguage = code => {
        i18n.changeLanguage(code);
    };

    return (
        <div className="App">
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo"/>
                <h1>{t('welcome')}</h1>

                <div>
                    <button type="button" onClick={() => changeLanguage('es')}>
                        {t('translation:es')}
                    </button>

                    <button type="button" onClick={() => changeLanguage('en')}>
                        {t('translation:en')}
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
