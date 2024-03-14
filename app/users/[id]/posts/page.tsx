import { UsersPageProps } from "@/app/lib/types";

const UserPost = ({params: {id}}: UsersPageProps) => {
    return ( <h2>User post : {id}</h2> );
}
 
export default UserPost;