import { UsersPageProps } from "@/app/lib/types";

const User = ({params: {id}}: UsersPageProps) => {
    return ( <h2>User : {id}</h2> );
}
 
export default User;