import React, { useContext } from 'react'
import { GlobalStateContext } from '../Context/GlobalStateProvider';

export default function Grid() {
    const { oneGap, oneCellHeight, oneCellWidth } = useContext(GlobalStateContext);
    return (
        <div style={{ userSelect: 'none', gap: oneGap }} className=' z-0 flex  bg-[#171C24] h-screen'>
            <div
                className='z-30 flex-col justify-center '
                style={{ gap: oneGap }}
            >
                <div className=' flex' style={{ gap: oneGap }}>
                    <div
                        style={{  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 3 - (1 * oneGap) - (oneCellWidth * 1 - (3 * oneGap))}px`, height: `${(oneCellHeight * 2) + (1 * oneGap)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        style={{  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 1 - (3 * oneGap)}px`, height: `${(oneCellHeight * 2) + (1 * oneGap)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                </div>
                <div
                    style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 3}px`, height: `${(oneCellHeight * 2) + (1 * oneGap)}px` }}
                    className='bg-[#556172] flex items-center justify-center'
                    id='glass'
                />
            </div>

            <div
                className='z-30 flex-col justify-center '
                style={{ gap: oneGap }}
            >
                <div className=' flex' style={{ gap: oneGap }}>
                    <div style={{ gap: oneGap }}>

                        <div className='absolute flex ' style={{ gap: oneGap }}>
                            <div
                                style={{  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2 + (5 * oneGap)}px`, height: `${(oneCellHeight * 1)}px` }}
                                className='bg-[#556172] flex items-center justify-center'
                                id='glass'
                            />
                            <div
                                style={{  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 1 + (3 * oneGap)}px`, height: `${(oneCellHeight * 2) + (1 * oneGap)}px` }}
                                className='bg-[#556172] flex items-center justify-center'
                                id='glass'
                            />
                        </div>
                        <div className=' flex ' style={{ marginTop: (oneCellHeight * 1), gap: oneGap }}>
                            <div
                                style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2 - (2 * oneGap)}px`, height: `${(oneCellHeight * 2 + (1.9 * oneGap))}px` }}
                                className='bg-[#556172] flex items-center justify-center'
                                id='glass'
                            />
                            <div>
                                <div
                                    style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${(oneCellWidth * 2 + (5 * oneGap)) - (oneCellWidth * 2 - (2 * oneGap)) - (1 * oneGap)}px`, height: `${(oneCellHeight * 2) + (1 * oneGap) - (oneCellHeight * 1) - (1 * oneGap)}px` }}
                                    className='right-0 bg-[#556172] flex items-center justify-center'
                                    id='glass'
                                />
                                <div
                                    style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${((oneCellWidth * 2 + (5 * oneGap)) - (oneCellWidth * 2 - (2 * oneGap)) - (1 * oneGap)) + (oneCellWidth * 1 + (3 * oneGap)) + (1 * oneGap)}px`, height: `${(oneCellHeight * 2 + (1.9 * oneGap)) - ((oneCellHeight * 2) + (1 * oneGap) - (oneCellHeight * 1) - (1 * oneGap)) - (1 * oneGap)}px` }}
                                    className='right-0 bg-[#556172] flex items-center justify-center'
                                    id='glass'
                                />
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <div style={{ gap: oneGap }}>
                        {/* <div
                            style={{  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 1.32}px`, height: `${(oneCellHeight * 1.87)}px` }}
                            className='bg-[#556172] flex items-center justify-center'
                            id='glass'
                        /> */}

                    </div>
                </div>
                <div
                    style={{ marginLeft: (oneCellWidth * 1 + (3 * oneGap)), marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${(oneCellWidth * 1 + (3 * oneGap)) + (oneCellWidth * 2 + (5 * oneGap)) + (1 * oneGap)}px`, height: `${(oneCellHeight * 0.4)}px` }}
                    className='bg-[#556172] flex items-center justify-center'
                    id='glass'
                />
                <div
                    style={{  marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${(oneCellWidth * 1 + (3 * oneGap)) + (oneCellWidth * 2 + (5 * oneGap)) + (1 * oneGap)}px`, height: `${(oneCellHeight * 0.4)}px` }}
                    className='bg-[#556172] flex items-center justify-center '
                    id='glass'
                />
            </div>

            <div>
                <div
                    className='z-30 flex-col justify-center '
                    style={{ gap: oneGap }}
                >
                    <div
                        style={{  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2}px`, height: `${(oneCellHeight * 1) + (2.8 * oneGap)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2}px`, height: `${(oneCellHeight * 0.5)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2}px`, height: `${(oneCellHeight * 0.5)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2}px`, height: `${(oneCellHeight * 0.5)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2}px`, height: `${(oneCellHeight * 0.5)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        style={{ marginTop: oneGap,  backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 2}px`, height: `${(oneCellHeight * 0.5)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />

                </div>
            </div>
        </div>
    )
}

