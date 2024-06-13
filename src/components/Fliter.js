import { filterData } from "../data";


function Filter( props ){
    // let filterData = props.filterData ;
    let category = props.category ;
    let setcategory = props.setcategory ;

    function filterhandler (title){
        // console.log("kunal");
        setcategory(title);
    }


    return(
        <div className=" bg-slate-600  max-w-11/12 w-[90%] mx-auto pt-6 pb-6 flex flex-wrap justify-center gap-[2rem]">
            {
                props.filterData.map( (data) => {
                    return(
                        <button onClick={ () => {filterhandler(data.title)}} key={data.id} className = {` bg-white p-2 pt-1 pb-1 rounded-sm font-bold border-2 
                        ${ category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"} ` }>{data.title}</button>  
                    );
                })
            }
        </div>
    );
}

export default Filter ;