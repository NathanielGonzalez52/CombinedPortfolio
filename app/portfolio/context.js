import React, { createContext } from 'react';

export default function Context() {
    const [theme, setTheme] = useState("light")

    const DarkModeContext = createContext(theme);

}
