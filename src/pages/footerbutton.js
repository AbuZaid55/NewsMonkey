function Button(props){
    return (
        <div className="d-flex w-100 align-items-center justify-content-around justify-content-sm-between my-4 position-fixed bottom-0 text-nowrap">
            <button type="button" onClick={()=>{(props.page>1) && props.setpage(props.page-1)}} disabled={(props.page<=1)? true:false} className="btn btn-dark mx-5" >&larr; Previous</button>
            <button type="button" onClick={()=>{(props.page<Math.ceil(props.totalacticles/props.pagesize)) && props.setpage(props.page+1)}}  disabled={(props.page>=Math.ceil(props.totalacticles/props.pagesize))? true:false}className="btn btn-dark mx-5" > Next &rarr;</button>
            {(props.page>Math.ceil(props.totalacticles/props.pagesize))? props.setpage(1):''}
        </div>
    )
}
export default Button;
// 