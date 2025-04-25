// "use client"
// import React from 'react'
// import {motion} from 'framer-motion'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Label } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import { useRouter } from 'next/navigation'
// import * as yup from 'yup'
// import {yupResolver} from '@hookform/resolvers/yup'
// import { useForm } from 'react-hook-form'
// import { Button } from '@/components/ui/button'
// import { LogIn, LogInIcon } from 'lucide-react'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// function page() {

//     const router = useRouter()
//     const regesterSchema = yup.object().shape(
//         {
//             username : yup.string().required("name is required"),
//             email :  yup.string().email("Email is invalid").required("Email is required"),
//             password :  yup.string().min(6,"min 6 character").required("Password is required"),
//             dateOfBirth :  yup.date().required("DOB is required"),
//             gender :  yup.string().oneOf(['male','female','others'] , 'please select one gender').required("gender is required")
//         }
//     )
//     const loginSchema = yup.object().shape(
//         {
           
//             email :  yup.string().email("Email is invalid").required("Email is required"),
//             password :  yup.string().min(6,"min 6 character").required("Password is required"),
//         }
//     )

//     const {register : registerLogin,handleSubmit : handleSubmitLogin , reset : resetLoginForm ,
// formState : {errors : ErrorLogin}

//     } = useForm({
//         resolver : yupResolver(loginSchema) 
//     })

//     const {register : registerSignup,handleSubmit : handleSubmitSignup , reset : resetSignupForm ,
//         formState : {errors : ErrorSignup}
        
//             } = useForm({
//                 resolver : yupResolver(regesterSchema) 
//             })
//   return (
//     <div className='min-h-screen bg-gradient-to-br from-blue-400 to-purple-500
//     flex items-center justify-center
//     '>
//     <motion.div
//     initial = {{opacity : 0 , scale : 0.9}}
//     animate = {{opacity : 1 , scale : 1}}
//     transition={{duration : 0.5}}
//     >
//     <Card className={`w-[420px] max-w-md dark:bg-[rgb(24,24,24)]`}>
//     <CardHeader>
//     <CardTitle className={`font-bold text-2xl text-center`}>FaceBook</CardTitle>
//     <CardDescription className={`text-center`}>Connect with friends or the world around you !!! </CardDescription>
//     </CardHeader>

//     <CardContent>

//     <Tabs defaultValue = 'login' className={`w-full`}>

//         <TabsList className={`w-full bg-gray-300 dark:bg-[rgb(36,37,38)]`}>
// <TabsTrigger className={`cursor-pointer`} value = 'login'>
// Login
// </TabsTrigger>

// <TabsTrigger  className={`cursor-pointer`} value = 'signup'>
// SignUp
// </TabsTrigger>

//         </TabsList>
//         <TabsContent value = 'login'>
// <form>
//     <div className='space-y-4'>
// <div className='space-y-2'>
// <Label htmlFor = 'loginEmail'>Email</Label>
// <Input id = "loginEmail"
// name = 'email'
// type={`email`}
// placeholder = 'Enter Your Email'
// className={
//     `col-span-3 border-black dark:border-gray-300`
// }
// {...registerLogin("email")}
// />
// {ErrorLogin.email?.message && <p className='text-red-500'>{ErrorLogin.email.message}</p>}
// </div>

// <div className='space-y-2'>
// <Label htmlFor = 'loginPassword'>Password</Label>
// <Input id = "loginPassword"
// name = 'password'
// type={`password`}
// placeholder = 'Enter Your Password'
// className={
//     `col-span-3 border-black dark:border-gray-300`
// }
// {...registerLogin("password")}
// />
// {ErrorLogin.password?.message && <p className='text-red-500'>{ErrorLogin.password?.message}</p>}
// </div>

// <Button className={`w-full cursor-pointer bg-black dark:bg-gray-300 flex justify-center items-center`} type = "submit">
//  <LogIn className='w-4 h-4'/> <span className='font-semibold'>LogIn</span>
// </Button>
//     </div>
// </form>
//         </TabsContent>

//         <TabsContent value = 'signup'>
// <form>
//     <div className='space-y-4'>

//     <div className='space-y-2'>
// <Label htmlFor = 'username'>Username</Label>
// <Input id = "username"
// name = 'username'
// type={`username`}
// placeholder = 'Enter Your Username'
// className={
//     `col-span-3 border-black dark:border-gray-300`
// }
// {...registerSignup("username")}
// />
// {ErrorSignup.username?.message && <p className='text-red-500'>{ErrorSignup.username?.message}</p>}
// </div>


// <div className='space-y-2'>
// <Label htmlFor = 'loginEmail'>Email</Label>
// <Input id = "loginEmail"
// name = 'email'
// type={`email`}
// placeholder = 'Enter Your Email'
// className={
//     `col-span-3 border-black dark:border-gray-300`
// }
// {...registerSignup("email")}
// />
// {ErrorSignup.email?.message && <p className='text-red-500'>{ErrorSignup.email.message}</p>}
// </div>

// <div className='space-y-2'>
// <Label htmlFor = 'loginPassword'>Password</Label>
// <Input id = "loginPassword"
// name = 'password'
// type={`password`}
// placeholder = 'Enter Your Password'
// className={
//     `col-span-3 border-black dark:border-gray-300`
// }
// {...registerSignup("password")}
// />
// {ErrorSignup.password?.message && <p className='text-red-500'>{ErrorSignup.password?.message}</p>}
// </div>

// <div className='space-y-2'>
// <Label htmlFor = 'dob'>Date of Birth</Label>
// <Input id = "dob"
// name = 'dob'
// type={`date`}
// placeholder = 'Enter Your DOB'
// className={
//     `col-span-3 border-black dark:border-gray-300`
// }
// {...registerSignup("dateOfBirth")}
// />
// {ErrorSignup.dateOfBirth?.message && <p className='text-red-500'>{ErrorSignup.dateOfBirth?.message}</p>}
// </div>




// <div className='flex flex-col  gap-2'>
// <Label htmlFor = 'gender'>Gender</Label>
// <Select {...registerSignup("gender")}>
//   <SelectTrigger className = "w-full">
//     <SelectValue placeholder = "Select Gender"/>
//   </SelectTrigger>
//   <SelectContent>
//     <SelectItem value = "male">Male</SelectItem>
//     <SelectItem value = "female">Female</SelectItem>
//     <SelectItem value = "other">other</SelectItem>
//   </SelectContent>
// </Select>
// {ErrorSignup.gender?.message && <p className='text-red-500'>{ErrorSignup.gender?.message}</p>}
// </div>


// <Button className={`w-full cursor-pointer bg-black dark:bg-gray-300 flex justify-center items-center`} type = "submit">
//  <LogInIcon className='w-4 h-4'/> <span className='font-semibold'>SignUP</span>
// </Button>
//     </div>
// </form>
//         </TabsContent>

//         </Tabs>
//     </CardContent>
//     <CardFooter className="flex flex-col space-y-4">
//   <div className="relative w-full">
//     <div className="absolute inset-0 flex items-center">
//       <span className="w-[30%] border-t border-muted-foreground"></span>
//       <div className="w-[40%] flex justify-center">
//         <span className="dark:bg-[rgb(24,24,24)] bg-white px-2 text-xs text-muted-foreground ">
//           Or Continue With
//         </span>
//       </div>
//       <span className="w-[30%] border-t border-muted-foreground"></span>
//     </div>
//   </div>
//   <div className='w-full'>
// <motion.div

// whileHover={{scale : 1.05}}
// whileTap={{scale : 0.95}}

// >
//     <Button className={`w-full cursor-pointer`} variant={`outline`}>
//     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
// <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
// </svg>

// Google
//     </Button>
    
// </motion.div>
//   </div>

// </CardFooter>

// </Card>

//     </motion.div>
//     </div>
// )
// }

// export default page


"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { LogIn, LogInIcon } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function Page() {
    const router = useRouter()
    
    const signupSchema = yup.object().shape({
        username: yup.string().required("Name is required"),
        email: yup.string().email("Email is invalid").required("Email is required"),
        password: yup.string().min(6, "Min 6 characters").required("Password is required"),
        dateOfBirth: yup.date().required("DOB is required"),
        gender: yup.string().oneOf(['male', 'female', 'others'], 'Please select one gender').required("Gender is required")
    })
    
    const loginSchema = yup.object().shape({
        email: yup.string().email("Email is invalid").required("Email is required"),
        password: yup.string().min(6, "Min 6 characters").required("Password is required"),
    })

    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        reset: resetLoginForm,
        formState: { errors: ErrorLogin }
    } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        reset: resetSignupForm,
        formState: { errors: ErrorSignup }
    } = useForm({
        resolver: yupResolver(signupSchema)
    })

    const handleLoginSubmit = (data) => {
        console.log('Login Data:', data);
        // router.push('/dashboard');
    }

    const handleSignupSubmit = (data) => {
        console.log('Signup Data:', data);
        // router.push('/dashboard');
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="w-[420px] max-w-md dark:bg-[rgb(24,24,24)]">
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl text-center">Facebook</CardTitle>
                        <CardDescription className="text-center">Connect with friends or the world around you!!!</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Tabs defaultValue='login' className="w-full">
                            <TabsList className="w-full bg-gray-300 dark:bg-[rgb(36,37,38)]">
                                <TabsTrigger className="cursor-pointer" value='login'>
                                    Login
                                </TabsTrigger>
                                <TabsTrigger className="cursor-pointer" value='signup'>
                                    SignUp
                                </TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value='login'>
                                <form onSubmit={handleSubmitLogin(handleLoginSubmit)}>
                                    <div className='space-y-4'>
                                        <div className='space-y-2'>
                                            <Label htmlFor='loginEmail'>Email</Label>
                                            <Input
                                                id="loginEmail"
                                                name='email'
                                                type="email"
                                                placeholder='Enter Your Email'
                                                className="col-span-3 border-black dark:border-gray-300"
                                                {...registerLogin("email")}
                                            />
                                            {ErrorLogin.email?.message && <p className='text-red-500'>{ErrorLogin.email.message}</p>}
                                        </div>

                                        <div className='space-y-2'>
                                            <Label htmlFor='loginPassword'>Password</Label>
                                            <Input
                                                id="loginPassword"
                                                name='password'
                                                type="password"
                                                placeholder='Enter Your Password'
                                                className="col-span-3 border-black dark:border-gray-300"
                                                {...registerLogin("password")}
                                            />
                                            {ErrorLogin.password?.message && <p className='text-red-500'>{ErrorLogin.password?.message}</p>}
                                        </div>

                                        <Button className="w-full cursor-pointer bg-black dark:bg-gray-300 flex justify-center items-center" type="submit">
                                            <LogIn className='w-4 h-4' /> <span className='font-semibold'>LogIn</span>
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>

                            <TabsContent value='signup'>
                                <form onSubmit={handleSubmitSignup(handleSignupSubmit)}>
                                    <div className='space-y-4'>
                                        <div className='space-y-2'>
                                            <Label htmlFor='username'>Username</Label>
                                            <Input
                                                id="username"
                                                name='username'
                                                type="text"
                                                placeholder='Enter Your Username'
                                                className="col-span-3 border-black dark:border-gray-300"
                                                {...registerSignup("username")}
                                            />
                                            {ErrorSignup.username?.message && <p className='text-red-500'>{ErrorSignup.username?.message}</p>}
                                        </div>

                                        <div className='space-y-2'>
                                            <Label htmlFor='signupEmail'>Email</Label>
                                            <Input
                                                id="signupEmail"
                                                name='email'
                                                type="email"
                                                placeholder='Enter Your Email'
                                                className="col-span-3 border-black dark:border-gray-300"
                                                {...registerSignup("email")}
                                            />
                                            {ErrorSignup.email?.message && <p className='text-red-500'>{ErrorSignup.email.message}</p>}
                                        </div>

                                        <div className='space-y-2'>
                                            <Label htmlFor='signupPassword'>Password</Label>
                                            <Input
                                                id="signupPassword"
                                                name='password'
                                                type="password"
                                                placeholder='Enter Your Password'
                                                className="col-span-3 border-black dark:border-gray-300"
                                                {...registerSignup("password")}
                                            />
                                            {ErrorSignup.password?.message && <p className='text-red-500'>{ErrorSignup.password?.message}</p>}
                                        </div>

                                        <div className='space-y-2'>
                                            <Label htmlFor='dob'>Date of Birth</Label>
                                            <Input
                                                id="dob"
                                                name='dateOfBirth'
                                                type="date"
                                                placeholder='Enter Your DOB'
                                                className="col-span-3 border-black dark:border-gray-300"
                                                {...registerSignup("dateOfBirth")}
                                            />
                                            {ErrorSignup.dateOfBirth?.message && <p className='text-red-500'>{ErrorSignup.dateOfBirth?.message}</p>}
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <Label htmlFor='gender'>Gender</Label>
                                            <Select onValueChange={(value) => {
                                                const event = { target: { name: "gender", value } };
                                                registerSignup("gender").onChange(event);
                                            }}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select Gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="others">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <input
                                                type="hidden"
                                                {...registerSignup("gender")}
                                            />
                                            {ErrorSignup.gender?.message && <p className='text-red-500'>{ErrorSignup.gender?.message}</p>}
                                        </div>

                                        <Button className="w-full cursor-pointer bg-black dark:bg-gray-300 flex justify-center items-center" type="submit">
                                            <LogInIcon className='w-4 h-4' /> <span className='font-semibold'>SignUp</span>
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-[30%] border-t border-muted-foreground"></span>
                                <div className="w-[40%] flex justify-center">
                                    <span className="dark:bg-[rgb(24,24,24)] bg-white px-2 text-xs text-muted-foreground">
                                        Or Continue With
                                    </span>
                                </div>
                                <span className="w-[30%] border-t border-muted-foreground"></span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button className="w-full cursor-pointer" variant="outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style={{ marginRight: '8px' }}>
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Google
                                </Button>
                            </motion.div>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}

export default Page