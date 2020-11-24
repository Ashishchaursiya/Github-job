import ReactMarkdown from 'react-markdown'
import React ,{useState} from 'react'
import Button from '@material-ui/core/Button';
import {Card, Badge,Collapse} from 'react-bootstrap'
 export default  function Job({job}){
     const [open,Setopen] = useState(false)
 return ( <>
 <Card className="mb-4">
     <Card.Body>
         <div className="d-flex justify-content-between">
          <div>
         <Card.Title>
         {job.title} - <span className="text-muted font-weight-light">{job.company}</span>

         </Card.Title>
         <Card.Subtitle className="text-muted mb-2">
                {new Date(job.created_at).toLocaleDateString()}
         </Card.Subtitle>
         <Badge variant='primary' className='mr-2'> 
          {job.type}
         </Badge>
         <Badge variant='secondary' className='mr-2'> 
          {job.location}
         </Badge> 
        
        <div style={{wordBreak:'break-all'}} className="pt-2">
            <ReactMarkdown source={job.how_to_apply} /> 
            
        </div>
        </div>
        <img alt={job.company} src={job.company_logo} className='d-none d-md-block' height="50" />
        </div>
        <Card.Text>
        <Button onClick={ ()=> Setopen( prevOpen => !prevOpen)}
        variant="outlined" color="primary">
        {open ? 'Hide Details':'View Details'}
      </Button>
        </Card.Text>
        <Collapse in={open}>
        <div className="mt-4">
        <ReactMarkdown source={job.description} /> 
         
        </div>
        </Collapse>
      
     </Card.Body>
 </Card>
 
 </>
 )
  
}