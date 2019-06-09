import React, { useState, useEffect } from 'react'
import { PDFReader } from 'react-read-pdf'
import cv from '../assets/common/files/CV.pdf'

function FileReader() {

    const [listener,setListener] = useState(false);
    const [w, setW] = useState(window.innerWidth)
    const [flag, setFlag] = useState(true)
    useEffect(() => {
        if(listener) setFlag(!flag);
        setListener(false);
    }, [w])
    useEffect(() => {
        window.addEventListener('resize', handler);
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener('resize', handler);
        }
    }, [])

    const handler = () => {
        setListener(true);
        setW(window.innerWidth);
    }

    return (
        <div>
            {flag && <PDFReader url={cv} width={w}/>}
            {!flag && <PDFReader url={cv} width={w}/>}
        </div>
    )
}

export default FileReader