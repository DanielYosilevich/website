import React, { useState } from 'react';
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import {im} from '../assets/common/img'
import useInterval from './CustomInterval'

function Thing(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useInterval(() => {
        setX(x + 0.2);
        setY(y + 0.2);
    }, 1000)

    const texture = new THREE.TextureLoader().load(im[props.img])

    return (
        <group>
            <mesh rotation-x={x} rotation-y={y} >
                <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
                <meshBasicMaterial attach="material"  >
                    <primitive attach="map" object={texture} />
                </meshBasicMaterial>
            </mesh>
        </group>
    )
}

function RotateCube(props) {
    return (
        <React.Fragment>
            <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                <Canvas>
                    <Thing img = {props.img}/>
                </Canvas>
            </div>
        </React.Fragment>
    )
}

export default RotateCube