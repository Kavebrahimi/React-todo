import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext.jsx";


export const FormBody = () => {

    const {taskItems, setTaskItems} = useContext(TaskContext);

    if (taskItems.length) {

        return (
            <ul className={'mt-15 flex flex-col gap-5  '}>

                {
                    taskItems.map((item)=> (
                        <li
                            key={item.id}
                            className={`flex relative items-center border-2 transition-all duration-300 justify-between bg-white p-5 rounded-lg w-8/9 md:w-5/9 m-auto shadow-lg
                          ${item.status === 'done' ? 'border-green-400' : item.status === 'undone' ? 'border-red-500' : 'border-transparent'}`
                            }>
                            {/* Done & not Dont Icons */}
                            {item.status === 'done' && (
                                <span className={`absolute left-1 transition-all duration-500 text-green-400 overflow-hidden opacity-0 ${item.status === 'done' ? 'opacity-100' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </span>
                            )}
                            {item.status === 'undone' && (
                                <span className={`absolute left-1 transition-all duration-500 overflow-hidden opacity-0 ${ (item.status === 'undone' ? 'opacity-100' : '')}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f41010" viewBox="0 0 256 256">
                                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                                    </svg>
                                </span>
                            )}

                            {/* Text */}
                            <div className={`max-w-64 sm:max-w-72 md:max-w-80 transition-all duration-500 lg:max-w-96 break-words ${item.status ? 'pl-5' : 'pl-0'}`}>{item.title}</div>

                            {/* Buttons */}
                            <div className={'flex items-center gap-2'}>
                                <button
                                    className={`hover:scale-120 transition-transform duration-300 overflow-hidden text-green-400 ${item.status === 'done' ? 'hidden' : ''}`}
                                    onClick={()=> {
                                        setTaskItems(prev => prev.map(t => t.id === item.id ? {...t, status: 'done'} : t))
                                    }}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M246.15,65.46l-.07-.08L222.15,41.85a20,20,0,0,0-28.23-.05l-90,88.83L70.06,97.78a20,20,0,0,0-28.21.08l-24,24a20,20,0,0,0,0,28.26l71.62,72a20,20,0,0,0,28.29,0L246.15,93.74A20,20,0,0,0,246.15,65.46ZM103.61,202.33,37.64,136,56,117.61,95.65,156a12,12,0,0,0,16.78-.08L208,61.61l18.32,18Z"></path></svg>
                                </button>
                                <button
                                    onClick={()=> {
                                        setTaskItems(prev=> prev.map(t=> t.id === item.id ? {...t, status: 'undone'} : t))
                                    }}
                                    className={`hover:scale-120 transition-transform duration-300 overflow-hidden text-red-500 ${item.status === 'undone' ? 'hidden' : ''}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
                                </button
                                >
                                <button
                                    onClick={()=> {
                                        setTaskItems(prev=> prev.filter(t=> t.id !== item.id))
                                    }}
                                    className={'hover:scale-120 transition-transform duration-300 overflow-hidden text-orange-500'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path></svg>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    } else {
        return (
            <div className={'mt-15 text-center text-2xl sm:text-3xl flex items-center justify-center'}>
                <span>Seems quiet down here</span>
                <svg className={'mb-12'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" id="Sleep--Streamline-Core-Remix" height="30" width="30">
                    <g id="Free Remix/Interface Essential/sleep">
                        <path id="Union" fill="#000000" fill-rule="evenodd" d="M15 1.3392857142857142C15 0.5996185714285714 15.599635714285712 0 16.339285714285715 0h6.428571428571429c0.5072142857142857 0 0.9711428571428571 0.28660928571428573 1.197857142857143 0.7403378571428572 0.2269285714285714 0.4537307142857143 0.17785714285714285 0.9966921428571428 -0.12642857142857142 1.4025192857142856l-4.821428571428571 6.428571428571429h3.75c0.7397142857142857 0 1.3392857142857142 0.5996142857142858 1.3392857142857142 1.3392857142857142s-0.5995714285714285 1.3392857142857142 -1.3392857142857142 1.3392857142857142h-6.428571428571429c-0.5072785714285714 0 -0.9710142857142856 -0.28660714285714284 -1.1978785714285713 -0.7403357142857143 -0.2268642857142857 -0.4537285714285714 -0.17789999999999997 -0.9966857142857142 0.12645 -1.4025214285714287l4.821428571428571 -6.428571428571429h-3.75C15.599635714285712 2.6785714285714284 15 2.0789528571428573 15 1.3392857142857142ZM1.8750107142857142 10.714285714285714c0 -0.7396714285714285 0.599625 -1.3392857142857142 1.339275 -1.3392857142857142H10.714285714285714c0.5115214285714286 0 0.9783642857142857 0.29136428571428574 1.203107142857143 0.7508785714285714 0.22474285714285713 0.45949285714285715 0.16810714285714287 1.0068857142857144 -0.1459285714285714 1.410642857142857L5.952642857142856 19.017857142857142H10.714285714285714c0.7396714285714285 0 1.3392857142857142 0.5996142857142858 1.3392857142857142 1.3392857142857142s-0.5996142857142858 1.3392857142857142 -1.3392857142857142 1.3392857142857142H3.2142857142857144c-0.5115 0 -0.9783642857142857 -0.29136428571428574 -1.20309 -0.7508571428571428 -0.22473642857142856 -0.4595142857142857 -0.1681092857142857 -1.0069071428571428 0.14593285714285714 -1.4106642857142855L7.975949999999999 12.053571428571429H3.2142857142857144c-0.7396499999999999 0 -1.339275 -0.5996142857142858 -1.339275 -1.3392857142857142ZM19.017857142857142 15.535714285714285c-1.0355142857142856 0 -1.875 0.8394642857142857 -1.875 1.875S17.982342857142857 19.285714285714285 19.017857142857142 19.285714285714285h4.670357142857143l-6.134485714285715 7.667999999999999c-0.45023571428571424 0.5627142857142857 -0.5380285714285714 1.3339285714285716 -0.22581428571428572 1.9834285714285713 0.3122357142857143 0.6497142857142858 0.9691928571428572 1.0628571428571427 1.6899428571428572 1.0628571428571427h8.571428571428571c1.035642857142857 0 1.875 -0.8395714285714285 1.875 -1.875s-0.8393571428571428 -1.875 -1.875 -1.875h-4.6701428571428565l6.134357142857143 -7.667978571428572c0.45021428571428573 -0.5628214285714286 0.5380714285714285 -1.3339071428571427 0.22564285714285715 -1.9835357142857142 -0.3122142857142857 -0.6496285714285713 -0.969 -1.0627714285714285 -1.6898571428571427 -1.0627714285714285h-8.571428571428571Z" clip-rule="evenodd" stroke-width="2.1429"></path>
                    </g>
                </svg>
            </div>
        )
    }

}