import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().min(4).max(10).required(),
  password: Joi.string().min(4).max(10).required(),
});

//! Main Component
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <p className="text-3xl text-center">Log in</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-3/4 m-auto lg:w-1/2">
        <div>
          <input {...register('username')} name="username" type="text" placeholder="Insert Username" className="py-2 pl-2 w-full" />
          {errors.username && <p className="text-red-900 text-lg">{errors.username.message}</p>}
        </div>
        <div>
          <input {...register('password')} name="password" type="password" placeholder="Insert Password" className="py-2 pl-2 w-full" />
          {errors.password && <p className="">{errors.password.message}</p>}
        </div>

        <input type="submit" value="Log In" className="bg-blue-400 w-3/4 m-auto lg:w-1/4 text-white py-2" />
      </form>
    </div>
  );
};

export default LoginForm;
