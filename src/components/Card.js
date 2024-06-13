import { FcLike } from "react-icons/fc";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcLikePlaceholder } from "react-icons/fc";


function Card(props){
    let likedcourses = props.likedcourses ;
    let setlikedcouses = props.setlikedcouses;

    let course = props.course ;

    function clickhandler(){
        if ( likedcourses.includes(course.id)){
            setlikedcouses( (prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed ");
        }
        else{
            if ( likedcourses.length === 0 ){
                setlikedcouses([course.id]);
            }
            else{
                setlikedcouses( (prev) => ([...prev , course.id] ));
            }
            toast.success("liked successfully");
        }
    }

    // console.log(course);
    return(
        <div className="w-[32%] flex flex-col bg-white rounded-lg overflow-hidden">
            
            <div className="relative">
                <img src={course.image.url} className="w-[100%] "></img>
                <button onClick={clickhandler} className=" rounded-full cursor-pointer absolute right-2 bottom-2 bg-white h-[40px] w-[40px] flex justify-center items-center"> 
                    {
                        likedcourses.includes(course.id) ? (<FcLike className="text-[1.75rem]"></FcLike>) : (
                            <FcLikePlaceholder className="text-[1.75rem]" />
                        ) 
                    }
                </button>
            </div>
            
            <div className=" p-2 pt-3 gap-y-5">
                <p className="font-bold ">{course.title}</p>
                <div>{course.description.substring(0,100) + "...."} </div>
            </div>
        </div>
    )
}

export default Card ;