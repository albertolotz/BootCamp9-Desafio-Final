import React from 'react'
import { Image } from 'react-native'
import Background from '~/components/Background'
import logo from '~/assets/logo.png'

import { Container, Form, FormInput, SubmitButton, TextLogo } from './styles'

export default function SignIn() {
    return (
        <Background>
            <Container>
                <Image source={logo} />
                <TextLogo>GYMPOINT</TextLogo>
                <Form>
                    <FormInput
                        icon="lock-outline"
                        placeholder="Digite seu Id"
                    />
                    <SubmitButton onPress={() => {}}>
                        Entrar no Sistema
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
    )
}
