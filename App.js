import React, { useState } from 'react';
import { AppNavigation } from './src/navigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import {bootstrap} from "./src/bootstrap"


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  if (!isLoaded) {
    return <AppLoading
          startAsync={bootstrap}
          onFinish={()=>setIsLoaded(true)}
          onError={(e)=>console.error(e)}
        />
  }
  return (
    <AppNavigation/>
  );
}

