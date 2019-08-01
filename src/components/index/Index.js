import React, { Component, Fragment } from 'react'

import styled from 'styled-components'

const Body = styled.div`
  padding: 1em;
  background: blue;
`

const TitleSection = styled.section`
    padding: 4em;
    background: papayawhip;
`

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: palevioletred;
`

const SubTitle = styled.h2`
    font-size: 2.5em;
    text-align: center;
    color: palevioletred;
`

const SubText = styled.p`
    text-align: center;
    color: palevioletred;
`

const InformationSection = styled.section`
    padding: 4em;
    background: purple;
`

const ControlSection = styled.section`
    padding: 4em;
    background: green;
`

const BoardSection = styled.section`
    padding: 4em;
    background: red;
`

const HistorySection = styled.section`
    padding: 4em;
    background: yellow;
`

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        // const {} = this.props
        // const {} = this.state

        return (
            <Body>

                <TitleSection>
                    <Title>
                        Welcome To Hexapawn!
                    </Title>

                    <SubTitle>
                        A.I. Without The Electricity!
                    </SubTitle>

                    <SubText>
                        Hexpawn is a simplified version of chess you can play by yourself that demostrates a basic principle of machine learning. 
                    </SubText>
                </TitleSection>

                <InformationSection>
                    <h1>I am the information!!!</h1>
                </InformationSection>

                <ControlSection>
                    <h1>I am the controls!</h1>
                </ControlSection>

                <BoardSection>
                    <h1>I am the board!!!</h1>
                </BoardSection>

                <HistorySection>
                    <h1>I am the history!!!</h1>
                </HistorySection>

            </Body>
        )
    }
}

export default Index