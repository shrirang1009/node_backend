const asyncHandler=(requestHandler)=>
{
   (req,res,next)=>
   {
    Promise.resolve().catch((err)=>next(err)).
    catch((err)=>next(err))

   }
}
export {asyncHandler}
// Hier order function
// function ko function mai pass kiya
// const asyncHandler=(fn)=> async (req,res,next)=>{
//    try{
//       // extecute the function that was passed
//       await fn(req,res,next)
//    }
//    catch(error)
//    {  
//     // How to send errors
//       res.status(error.code|| 500).json({
//         success:false,
//         message:error.message
//       })
//    }
//    finally{

//    }
// }