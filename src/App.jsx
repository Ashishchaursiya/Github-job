 import React,{useState} from "react"
 import useFetchjob from "./Fetchjob"
 import {Container} from "react-bootstrap"
 import { CircularProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle'
import "./index.css"
 
import Job from './job'
import JobPagination from "./Jobpagination";
import Searchform from "./search";
 
  
 const App = ()=>{
     const [params,setparams] =useState({})
     const [page,setpage] = useState(1)
    const {jobs,loading,error,hasNextPage} = useFetchjob(params,page)
    function handleParamschange(e){
        const param = e.target.name
        const value = e.target.value
        setpage(1)
        setparams( prevparams => {
            return {...prevparams,[param]:value}
        })
    }
    return (
        <>
        <Container className="my-5">
        <h1 className="p-2 mb-4"> Github Jobs</h1>
        <Searchform params={params} onParamschange={handleParamschange} />
        <JobPagination page={page} setpage={setpage} hasNextPage={hasNextPage}/>
       <div className="text-center">
       {loading &&  <div><CircularProgress size={34} color="primary" /> <h3>Loading...</h3> </div> } 
         
       </div>  
        {error && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>Unable to fetch API</strong>
       </Alert>  }
        {jobs.map( (job) =>{
            return <Job key={job.id} job={job}  />
        })}
        </Container>
       
        </>
    )
        
    }
    
 export default App;
 
