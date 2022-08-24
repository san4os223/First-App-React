import React from "react";
let Preloader = (props) => {
    return<div style = {{ backgroundColor:'white'}}>
        {this.props.isFetching ? <img src={'https://loading.io/asset/594758'}/> : null}
    </div>
}
export default Preloader;