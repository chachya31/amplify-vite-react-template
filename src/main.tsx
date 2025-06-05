import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator, translations } from "@aws-amplify/ui-react";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import { components, formFields } from "./components/auth.tsx"
import { I18n } from "aws-amplify/utils";

// I18n.putVocabularies(translations);
// I18n.setLanguage('ja');

// I18n.putVocabularies({
//   ja: {
//     'Sign In': 'ログイン',
//     'Sign Up': 'ユーザ登録',
//   }
// })

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator components={components} >
      <App />
    </Authenticator>
  </React.StrictMode>
);
