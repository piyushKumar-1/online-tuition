import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQueries } from '../../actions/queriesAction.js';


export class Query extends React.Component{
	static propTypes = {
		queries: PropTypes.array.isRequired,
		auth: PropTypes.object.isRequired,
	}

	componentDidMount(){
	    this.props.getQueries();
	}


	render() {

	const { isLoading, isAuthenticated } = this.props.auth;
    const k = (
	    <Fragment>
                <div className="container">
                    <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Last</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.queries.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.last}</td>
                        </tr>
                        ))}
                        </tbody>
                     </table>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
                     <br/><br/><br/>
		        </div>

		    </Fragment>
	)

		return (

		<Fragment>
		    { isLoading ? <h2>Loading....</h2> : k }
		</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	queries: state.queries.queries,
	auth: state.auth,
});

export default connect(mapStateToProps, { getQueries })(Query)