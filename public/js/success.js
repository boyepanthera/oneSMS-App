class Success extends React.Component {
    render() {
        return (
        
            <div id='thank-you' className=' shadow p-3 mb-5 bg-white rounded'>
                    <i className="d-flex justify-content-center far fa-check-circle text-primary"></i>
                    <p className='d-flex justify-content-center'>Your mesage delivered successfully. Want to send another message?</p>
                    <a href='/' className='d-flex justify-content-center btn btn-primary text-center '>Send Another message </a>
                </div>
    
        )
    }
}