import { useRouteError } from "react-router-dom"



export const ErrorPage = () => {
   const error = useRouteError();
   return (
      <>
      <div className="container mt-5">
         <h1 className="text-danger">Opps!</h1>
         <p>Sorry , an unexpexted error has occured.</p>
         <p>
            <i>{error.statusText || error.message}</i>
         </p>
      </div>
      </>
   )
}