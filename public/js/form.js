class Form extends React.Component {
    render() {
        return (
            <div id="form-div">
                <form id ='form' action='/sms' method='post'> 
                    <div classname='form-group'>
                        <label htmlFor='sender'><strong>Sender Id </strong><i className="text-danger fas fa-asterisk"></i> (Any name)</label>
                        <input name='sender' type="text" className='form-control' id='sender' />
                    </div>
                    <div classname='form-group'>
                        <label htmlFor='receiver'><strong> Receiver number</strong> <i className="text-danger fas fa-asterisk"></i> e.g. (2348055555555) </label>
                        <input name='receiver' type="text" className='form-control' id='receiver' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='message'><strong>Your message</strong> <i className="text-danger fas fa-asterisk"> </i> Max.(150 characters) </label>
                        <textarea id ='message' name='message' className='form-control'>
                        </textarea>
                    </div>  
                    <button class='col btn btn-primary'>Send SMS</button>      
                </form>       
            </div>


        )
    }
}