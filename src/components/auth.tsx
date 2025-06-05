import { Image, Text, useTheme, View } from "@aws-amplify/ui-react";

export const components = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify Logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    )
  },

  Footer() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    )
  },
}

export const formFields = {
  signIn: {
    username: {
      label: 'メールアドレス',
      placeholder: 'メールアドレスを入力してください'
    },
    password: {
      label: 'パスワード',
      placeholder: 'パスワードを入力してください'
    },
    
  }
}