export default function Header(props) {
    const {isMobile} = props;
    return (
            <header className="flex flex-row px-2 border-b border-slate-600 pb-2">
                <div className={`${isMobile ? "basis-2/2" : "basis-1/2"} flex gap-3`}>
                    <img className="desktop" alt="test" src="/static/3.png" />
                    <img className="mobile w-8" alt="test" src="/static/mobile-logo.svg" />
                    <div className="flex justify-center items-center">
                        BTC / USD <img className="w-4 ml-1" src="/static/arrow.svg" alt="arrow"/>
                    </div>
                    <div className="font-bold flex justify-center items-center">
                        $19,087
                    </div>
                    <img className="mobile absolute top-2 right-2" src="/static/ham.svg" alt="ham"/>
                    <div className="grid grid-rows-2 grid-cols-4 mt-2 desktop">
                        <div className="text-xs text-slate-400">24h Change</div>
                        <div className="text-xs text-slate-400">24h High</div>
                        <div className="text-xs text-slate-400">24h Low</div>
                        <div className="text-xs text-slate-400">24h Volume</div>
                        <div className="text-sm text-lime-600">+0.71%</div>
                        <div className="text-sm">19,400</div>
                        <div className="text-sm">18,533</div>
                        <div className="text-sm">1,997.50 BTC</div>
                    </div>
                </div>
                <div className="basis-1/2 justify-end flex flex-row mt-4 gap-4 desktop">
                    <button className="text-sm text-sky-500 border-sky-500 rounded-sm border px-3">
                        Log in
                    </button>
                    <button className="text-sm rounded-sm border px-3">
                        Register
                    </button>
                    <img className="w-6" src="/static/setting.svg" alt="set"/>
                </div>
            </header>
    )
}
