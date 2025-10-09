import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import router from './Routes/Routes';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
 


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
      <RouterProvider
        fallbackElement={<LoadingSpinner></LoadingSpinner>}
        router={router}
      />
       
    </Suspense>
  </StrictMode>
);
