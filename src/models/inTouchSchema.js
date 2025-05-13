import * as Yup from "yup"
const inTouchSchema=Yup.object({
    UserName : Yup.string("").min(2 ,"Must be at Least 2 Characters ").required("This User Name Is Required"),
    Email:Yup.string().email("Invalid email").required("This Email Is Required"),
    Phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Sorry  Must Be Egyption Number").required("This Phone Is Required"),
    Subject:Yup.string().required("This Subject Is Required"),
    message : Yup.string().required("This Message Is Required")
})


export default inTouchSchema