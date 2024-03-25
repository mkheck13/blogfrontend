'use client'

import { useState } from "react";
import { Button, Checkbox, Label, Navbar, TextInput } from 'flowbite-react';
import { useRouter } from "next/navigation";
import NavbarComponent from "./components/navbarComponent";

// by default next js components our server side (server side components cannot have usestates in them)
// 'use client' turns the component into client component.
// The page .tsx inside of our app is our default home page

// This will be our login page and our create account page.


export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [switchBool, setSwitchBool] = useState<boolean>(true);

  const router = useRouter();

  // function for toggleing between our login and create account screen
  const handleSwitch = () => {
    setSwitchBool(!switchBool);
  }

  const handleSubmit = () =>{
    // putting our user data inside of an object so we can put it in our post fetch
    let userData = {
      username: username,
      password: password
    }
    
    if(switchBool) {
      // create account logic in here
    }else{
      // login logic in here
      router.push('/Dashboard');
    }
  }

  return (
    <> 
    <NavbarComponent/>

    <div className="grid grid-flow-row justify-center mt-20">
      
      <div className="bg bg-slate-400 min-w-96 p-8 rounded-lg">
        <h1 className="text-3xl">{switchBool ? 'Create Account' : 'Login'}</h1>
      <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="username" />
        </div>
        <TextInput id="username" type="text" placeholder="Enter Username" required onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex items-center gap-2">
        <Button color="light" onClick={handleSwitch}>{switchBool ? 'Already have an Account?' : 'Sign up'} </Button>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>


      </div>
    </div>
    </>
  );
}
