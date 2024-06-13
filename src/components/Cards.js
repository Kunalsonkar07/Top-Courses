import { useState } from "react";
import Card from "./Card"


function Cards( props ){

    const [ likedcourses , setlikedcouses ] = useState([]);
    let category = props.category ;
    let courses = props.courses;

    function getcourses(){
        if ( category === 'All'){
            let getall = [];
            Object.values(courses).forEach(
                course => {
                    course.forEach(
                        data => {
                            getall.push(data);
                        }
                    )
                }
            )
            // console.log(getall);
            return getall;
        }
        else{
            return courses[category];
        }
    }

    return(
        <div className=" bg-slate-600 max-w-[1070px] w-[90%] flex flex-wrap mx-auto justify-center gap-[1rem] p-3">
            {   
                // let arr = getcourses();

                
                getcourses().map(
                    (course) => {
                        return(  
                            <Card key={course.id} course={course} likedcourses={likedcourses} setlikedcouses={setlikedcouses} ></Card>
                            // <p>hii</p>
                        );
                    }
                )
                
            }
        </div>
    )
}

export default Cards ;