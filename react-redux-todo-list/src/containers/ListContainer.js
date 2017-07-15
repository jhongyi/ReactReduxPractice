import { connect } from 'react-redux'
import List from '../components/List'
//import {actionCreator} from 'actionCreatorPath'

const mapStateToProps = (state, ownProps) => {
    return {
        list: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)