const Button=()=>{
    const refresh=()=>{
        location.reload();
    }
    return(
        <p className="btn" onClick={refresh}><i class="fa-solid fa-circle-chevron-right"></i></p>
    )
}
export default Button