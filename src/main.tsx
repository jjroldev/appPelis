import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { MenuProvider } from './context/MenuContext.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { EmailProvider } from './context/ExistsEmailContext.tsx'
import { SearchProvider } from './context/SearchContext.tsx'
createRoot(document.getElementById('root')!).render(
    <MenuProvider >
        <LanguageProvider>
            <AuthProvider>
                <EmailProvider>
                    <SearchProvider>
                        <App />
                    </SearchProvider>
                </EmailProvider>
            </AuthProvider>
        </LanguageProvider>
    </MenuProvider>
)
