import React, { useState, useEffect, useRef } from 'react'
import { PDFReader } from 'react-read-pdf'
import cv from '../assets/common/files/CV.pdf'

function FileReader() {
    const [w, setW] = useState(window.innerWidth);
    let refW = useRef(w);
    useEffect(() => {
        refW.current = w;
    });

    const [flag, setFlag] = useState(false)
    let refFlag = useRef(flag);
    useEffect(() => {
        refFlag.current = flag;
    });

    useEffect(() => {
        var ignore = false
        const handler = () => {
            if (ignore) return
            ignore = true;
            setTimeout(() => {
                setFlag(() => !refFlag.current)
                if (refW.current !== window.innerWidth) {
                    setW(window.innerWidth);
                }
                ignore = false;
            }, 500);
        }

        window.addEventListener('resize', handler);
        console.log('start')
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('resize', handler);
            console.log('clean')
        }
    }, [])

    return (
        <div>
            {flag && <PDFReader url={cv} width={w} />}
            {!flag && <PDFReader url={cv} width={w} />}
        </div>
    )
}

export default FileReader