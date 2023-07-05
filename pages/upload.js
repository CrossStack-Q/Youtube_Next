
import { Button, Input } from "@nextui-org/react";
import Login from "./login"
import { useSession } from "next-auth/react";
import MainUp from "../components/UploadContent/MainUP";
import HeaderUP from "../components/UploadContent/HeaderUP"

function Upload() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  
 


  return (
    <div className="">
      <HeaderUP />
      <MainUp />
    </div>
  );
}

export default Upload;
