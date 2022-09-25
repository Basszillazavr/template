import Head from 'next/head'
import { useState, useEffect } from "react";
import Header from "../components/common/Header";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        let video = setInterval(() => {
            if(window !== 'undefined') {
                if(window.innerWidth < 550) {
                    setIsMobile(true);
                }
                clearInterval(video);
            }
        }, 100);

    }, []);

    return (
    <div className="body">
      <Head>
        <title>Test task</title>
        <meta name="description" content="Crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header isMobile={isMobile} />
        <main className="grid grid-rows-2 grid-cols-10 desktop">
            <div className="col-span-2 border-b border-slate-600">
                <div className="flex justify-between px-4 py-1 border-b border-slate-400">
                    <div className="text-xs text-slate-400">
                        TRADES
                    </div>
                    <img className="w-4" src="/static/voice.svg" alt="voice"/>
                </div>
                <div className="flex flex-row px-4 py-1 border-b border-slate-600">
                    <div className="text-end text-slate-500 text-xs basis-1/3">
                        Amount
                    </div>
                    <div className="text-end text-slate-500 text-xs basis-1/3">
                        Time
                    </div>
                    <div className="text-end text-slate-500 text-xs basis-1/3">
                        Price
                    </div>
                </div>
                <img className="max-h-96" src="/static/6.png" alt=""/>
            </div>
            <div className="col-span-8 border-b border-slate-600">
                <img src="/static/1.png" alt="graph"/>
            </div>

            <div className="col-span-5 border-slate-600 border-r">
                <div className="flex justify-between px-4 py-1 border-b border-slate-600">
                    <div className="text-xs text-slate-400">
                        DEPTH CHART
                    </div>
                </div>
                <img src="/static/2.png" alt="graph"/>
            </div>
            <div className="col-span-5">
                <div className="flex justify-between px-4 py-1 border-b border-slate-600">
                    <div className="text-xs text-slate-400">
                        ORDER BOOK
                    </div>
                </div>
                <img src="/static/7.png" alt="graph"/>
            </div>
        </main>
        <main className="mobile">
            <img src="/static/4.png" alt="mobile"/>
            <img src="/static/8.png" alt="mobile"/>
        </main>
    </div>
  )
}
