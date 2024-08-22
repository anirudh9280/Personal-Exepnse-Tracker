import { useState } from 'react'
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Info from './components/Info';
import Account from './components/Account';
import Transactions from './components/Transactions';
import Chart from './components/Chart';
import Piechart from './components/Piechart';
import useStore from "./store"


const App = () => {
  const theme = useStore((state) => state.theme);
  return <main className={theme}>
    <div className="w-full px-6 md:px-20 bg-white dark:bg-slate-900">
      <Navbar /> 
      <div className="px-0 md:px-5 2xl:px-20">
        <Info title="Dashboard" subTitle="Monitor financial activity"/>
        <Stats />
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
          <Chart />
          <Piechart />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
          <Transactions />
          <Account />
        </div>
      </div>

    </div>
  </main>
}

export default App
