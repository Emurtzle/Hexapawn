import React, { Component, Fragment } from 'react'

import styled from 'styled-components'

import { test } from '../../gameplay/startGame'
require('../../gameplay/board.js')

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

const BasicButton = styled.button`
    type: button;
`

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            infoToggle: false,
            histToggle: false
        }
    }

    componentDidMount() {
        test()
    }

    openInfoSection = () => {
        this.setState({infoToggle: true})
    }

    closeInfoSection = () => {
        this.setState({infoToggle: false})
    }

    openHistSection = () => {
        this.setState({histToggle: true})
    }

    closeHistSection = () => {
        this.setState({histToggle: false})
    }


    render () {
        // const {} = this.props
        const { infoToggle, histToggle } = this.state

        return (
            <Body>
                
                <TitleSection>
                    <Title>
                        Welcome To Hexapawn!
                    </Title>

                    <SubTitle>
                        A.I. Without The Electricity! (kinda)
                    </SubTitle>

                    <SubText>
                        Hexpawn is a simplified version of chess you can play by yourself that demostrates a basic principle of machine learning. 
                    </SubText>
                </TitleSection>

                {!infoToggle && (
                    <BasicButton
                        onClick={this.openInfoSection}
                    >
                        Information
                    </BasicButton>
                )}
                
                {infoToggle && (
                    <InformationSection>
                        <BasicButton
                            onClick={this.closeInfoSection}
                        >
                            Close Information
                        </BasicButton>
                        <h1>I am the information!!!</h1>
                    </InformationSection>
                )}

                {!histToggle && (
                    <BasicButton
                        onClick={this.openHistSection}
                    >
                        History
                    </BasicButton>
                )}

                {histToggle && (
                    <HistorySection>
                        <BasicButton
                            onClick={this.closeHistSection}
                        >
                            Close History
                        </BasicButton>
                        <h1>I am the history!!!</h1>
                    </HistorySection>
                )}
                

                <ControlSection>
                    <h1>I am the controls!</h1>
                </ControlSection>

                <BoardSection>
                    <h1>I am the board!!!</h1>
                </BoardSection>

                

            </Body>
        )
    }
}

export default Index