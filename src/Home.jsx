import React from 'react'
import styled from 'styled-components'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'
import FeatureProducts from './Components/FeatureProducts'

export default function Home() {

    // const Wrapper = styled.section`
    //     height: 85dvh;
    // `

    return (
        <>
            <HeroSection />
            <FeatureProducts/>
            <Services />
            <Trusted/>
        </>
    )
}

