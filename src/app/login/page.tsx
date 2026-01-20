import LoginForm from '@/components/login-form';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-beige-100 grid min-h-svh lg:grid-cols-[40%_60%] lg:p-4">
      <div className="hidden h-full w-full rounded-xl bg-[url('/illustration-image.svg')] bg-cover bg-center bg-no-repeat lg:block">
        <div className="flex h-full flex-col justify-between">
          <Image
            src="/Logo.svg"
            alt="Finance Logo"
            width={150}
            height={150}
            className="m-10"
          />
          <div className="flex flex-col items-center justify-center pb-8 text-white">
            <h3 className="text-left text-3xl font-semibold sm:px-2 lg:max-w-120">
              Keep track of your money and save for your future
            </h3>
            <p className="mt-4 text-left text-[15px] sm:px-2 lg:max-w-120">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:p-10">
        <div className="flex h-16 w-full items-center justify-center rounded-b-xl bg-black lg:hidden">
          <Image
            src="/Logo.svg"
            alt="Finance Logo"
            width={150}
            height={150}
            className="m-4"
          />
        </div>
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-145">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
