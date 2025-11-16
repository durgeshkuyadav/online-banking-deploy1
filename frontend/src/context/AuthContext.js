import React,{createContext,useContext,useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const AuthContext=createContext();
export const useAuth=()=>useContext(AuthContext);
const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const login=async(creds)=>{
    try{
      const{data}=await axios.post('/api/auth/login',creds);
      setUser({email:data.email,name:data.name,role:data.role});
      localStorage.setItem('token',data.token);
      toast.success('Login success');
      return{success:true};
    }catch(e){toast.error(e.response?.data||'Login failed');return{success:false,error:e.response?.data};}
  };
  const value={user,login};
  return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
