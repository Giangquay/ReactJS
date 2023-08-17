import React from "react";
import Footer from "./footer"
import Header from "./header"

function Layout({children,headerTitle,footerTitle}){
    // console.log(">>>>>>>>>>>",props,"<<<<<<<<<<<")
    // const {children:content} = props;//Destructuring
    // const content = props.children;
    // const {children,...data}=props;
    return (
        <>
        <Header title={headerTitle} />
        {children}
        <Footer title={footerTitle}/>
        </>//Fragment
    )
}

export default Layout