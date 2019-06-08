import React, { useState } from 'react';
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import im1 from '../assets/common/images/Angular.jpg'
import useInterval from '../components/CustomInterval'


function Thing() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [active, setActive] = useState(false)

    useInterval(() => {
        setX(x + 0.2);
        setY(y + 0.2);
    }, 1000)

    const [hovered, setHover] = useState(false)

    const texture = new THREE.TextureLoader().load(im1)

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


function Home() {

    return (
        <React.Fragment>
            <div style={{ height: "10rem", width: "10rem", backgroundColor: "lightgray" }}>
                <Canvas>
                    <Thing />
                </Canvas>
            </div>
            <div style={{ height: "20rem", width: "20rem", backgroundColor: "lightgray" }}>
            </div>
        </React.Fragment>
    )
}

export default Home