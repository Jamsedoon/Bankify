import AuthForm from '@/components/AuthForm'

const SignUp = async () => {

  return (
    <section className = 'flex-center size-full max-sm:px-6'>
      {/* we are not doing the <form></form> /n
      here cause we want to use it in sign up too*/}
      <AuthForm type = 'sign-up' />
    </section>
  )
}

export default SignUp
