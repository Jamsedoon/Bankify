import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className = 'flex-center size-full max-sm:px-6'>
      {/* we are not doing the <form></form> /n
      here cause we want to use it in sign up too*/}
      <AuthForm type = 'sign-in' />
    </section>
  )
}

export default SignIn
