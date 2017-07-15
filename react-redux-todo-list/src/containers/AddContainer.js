import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Add from '../components/Add'
import { ListActions } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators({...ListActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);