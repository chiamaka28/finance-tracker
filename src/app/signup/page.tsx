import SignupForm from '@/components/signup-form';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-beige-100 grid min-h-svh p-4 lg:grid-cols-[40%_60%]">
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
            <h3 className="text-left text-3xl font-semibold lg:max-w-120">
              Keep track of your money and save for your future
            </h3>
            <p className="mt-4 text-left text-[15px] lg:max-w-120">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-145">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
